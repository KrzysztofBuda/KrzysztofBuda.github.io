import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-28 sm:gap-16 sm:px-6 sm:pb-20 sm:pt-32 lg:grid-cols-2">
        <HeroContent />

        <HeroTerminal />
      </div>

      <HeroScrollIndicator />
    </section>
  );
}