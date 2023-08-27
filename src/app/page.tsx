import Filler from "@/components/filler";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-12 mt-4 max-w-[1100px] mx-auto px-4 md:px-6">
      <Hero />
      <Filler />
      <Services />
    </main>
  );
}
