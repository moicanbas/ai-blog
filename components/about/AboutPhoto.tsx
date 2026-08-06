import Image from "next/image";

export default function AboutPhoto() {
  return (
    <div className="relative mx-auto flex justify-center">
      {/* Resplandor ambiental */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/10 blur-3xl opacity-60 dark:opacity-30" />

      {/* Contenedor tipo tarjeta */}
      <div className="relative aspect-[4/5] w-72 sm:w-80 overflow-hidden rounded-3xl border-4 border-card bg-card p-2 shadow-2xl">
        <Image
          src="/avatar_2.jpeg"
          alt="Moisés Cantillo"
          width={380}
          height={475}
          priority
          className="!my-0 h-full w-full rounded-2xl object-cover !border-none !shadow-none"
        />
      </div>
    </div>
  );
}