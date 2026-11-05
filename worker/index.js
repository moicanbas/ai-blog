const response = (message, status = 200) => Response.json({ message }, {
  status,
  headers: { "Cache-Control": "no-store" },
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/contact") return env.ASSETS.fetch(request);

    if (request.method === "GET") {
      if (!env.TURNSTILE_SITE_KEY || !env.TURNSTILE_SECRET_KEY || !env.RESEND_API_KEY || !env.CONTACT_FROM) {
        return response("Contact unavailable", 503);
      }
      return Response.json({ siteKey: env.TURNSTILE_SITE_KEY }, { headers: { "Cache-Control": "no-store" } });
    }
    if (request.method !== "POST") return response("Method not allowed", 405);
    if (request.headers.get("Origin") !== url.origin) return response("Invalid origin", 403);
    if (!env.TURNSTILE_SECRET_KEY || !env.RESEND_API_KEY || !env.CONTACT_FROM || !env.CONTACT_LIMITER) {
      return response("Contact unavailable", 503);
    }
    const ip = request.headers.get("CF-Connecting-IP");
    if (!ip) return response("Contact unavailable", 503);
    const limit = await env.CONTACT_LIMITER.limit({ key: ip });
    if (!limit.success) return response("Too many requests", 429);
    if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) return response("Invalid request", 400);
    if (Number(request.headers.get("Content-Length")) > 12000) return response("Request too large", 413);

    let data;
    try {
      const body = await request.text();
      if (body.length > 12000) return response("Request too large", 413);
      data = JSON.parse(body);
    } catch {
      return response("Invalid request", 400);
    }
    if (!data || typeof data !== "object") return response("Invalid request", 400);
    const { name, email, message, token, website } = data;
    if (website) return response("OK");
    if (typeof name !== "string" || !name.trim() || name.length > 100 ||
        typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        typeof message !== "string" || message.trim().length < 10 || message.length > 4000 ||
        typeof token !== "string" || !token || token.length > 2048) {
      return response("Invalid request", 400);
    }

    try {
      const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
      });
      const result = await verification.json();
      if (!verification.ok || !result.success || result.action !== "contact" || result.hostname !== url.hostname) {
        return response("Verification failed", 400);
      }

      const sent = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: env.CONTACT_FROM,
          to: ["mocadevia@gmail.com"],
          reply_to: email,
          subject: "Nuevo mensaje desde mocadevia.online",
          text: `Nombre: ${name.trim()}\nCorreo: ${email}\n\n${message.trim()}`,
        }),
      });
      return sent.ok ? response("OK") : response("Unable to send", 502);
    } catch {
      return response("Unable to send", 502);
    }
  },
};