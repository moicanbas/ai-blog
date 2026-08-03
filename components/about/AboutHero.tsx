import AboutPhoto from "./AboutPhoto";

interface Props {
  name: string;
  title: string;
}

export default function AboutHero({ name, title }: Props) {
  return (
    <section className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
      <div>
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary backdrop-blur-md">
          Sobre mí
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Hola,
          <br />
          soy {name}.
        </h1>

        <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-muted">
          {title}
        </p>
      </div>

      <AboutPhoto />
    </section>
  );
}