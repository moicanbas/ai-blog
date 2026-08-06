import Container from "../layout/Container";

const statsData = [
  { value: "4", label: "Artículos publicados" },
  { value: "200+", label: "Lectores mensuales" },
  { value: "IA & Py", label: "Enfoque principal" },
  { value: "100%", label: "Contenido práctico" },
];

export default function Stats() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card/50 p-8 shadow-xs md:grid-cols-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <h3 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}