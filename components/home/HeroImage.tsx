import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl opacity-50 dark:opacity-30" />

      <div className="relative rounded-3xl border border-border bg-card/60 p-2.5 shadow-xl backdrop-blur-md transition-all">
        <Image
          src="/avatar.jpg"
          alt="Autor"
          width={420}
          height={520}
          priority
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}