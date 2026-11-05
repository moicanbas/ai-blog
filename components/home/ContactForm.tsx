"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}

export default function ContactForm() {
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [available, setAvailable] = useState(true);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    let active = true;
    let script: HTMLScriptElement | undefined;

    async function setup() {
      try {
        const response = await fetch("/api/contact");
        if (!response.ok) throw new Error("Unavailable");
        const { siteKey } = await response.json();
        if (!active || !siteKey) throw new Error("Unavailable");

        const render = () => {
          if (!active || !widget.current || !window.turnstile) return;
          widgetId.current = window.turnstile.render(widget.current, {
            sitekey: siteKey,
            action: "contact",
            callback: (value: string) => setToken(value),
            "expired-callback": () => setToken(""),
            "error-callback": () => { setToken(""); setAvailable(false); },
          });
        };

        if (window.turnstile) {
          render();
        } else {
          script = document.createElement("script");
          script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
          script.async = true;
          script.onload = render;
          script.onerror = () => { if (active) setAvailable(false); };
          document.head.appendChild(script);
        }
      } catch {
        if (active) setAvailable(false);
      }
    }

    setup();
    return () => {
      active = false;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      script?.remove();
    };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token || sending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.get("name"),
          email: fields.get("email"),
          message: fields.get("message"),
          website: fields.get("website"),
          token,
        }),
      });
      if (!response.ok) throw new Error("Unable to send");
      form.reset();
      setStatus("¡Mensaje enviado! Gracias por escribirme.");
    } catch {
      setStatus("No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por correo.");
    } finally {
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
      setToken("");
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-row">
        <label>Nombre<input name="name" autoComplete="name" required maxLength={100} placeholder="Tu nombre" /></label>
        <label>Correo electrónico<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="tu@correo.com" /></label>
      </div>
      <label>¿En qué puedo ayudarte?<textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder="Cuéntame sobre tu idea o proyecto..." /></label>
      <div className="contact-trap" aria-hidden="true"><label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div ref={widget} className="contact-verification" />
      {!available && <p className="contact-status" role="status">El formulario no está disponible por ahora. Puedes escribirme directamente por correo.</p>}
      {status && <p className="contact-status" role="status">{status}</p>}
      <button type="submit" disabled={!available || !token || sending}>{sending ? "Enviando..." : "Enviar mensaje"} <ArrowRight size={17} /></button>
    </form>
  );
}