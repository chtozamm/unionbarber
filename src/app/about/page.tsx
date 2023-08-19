import { ConstructionIcon, HardHatIcon, Info } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | Union Barbershop",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-12 mt-4 max-w-[1100px] mx-auto px-4 md:px-6">
      <section className="w-screen md:w-full border-t">
        <div className="aspect-video w-full flex flex-col justify-around items-center">
          <ConstructionIcon className="inline-block h-24 w-24" />
          <p className="flex justify-center gap-1.5 items-center text-sm text-zinc-500">
            <Info className="w-4 h-4" /> Раздел в разработке
          </p>
        </div>
      </section>
    </main>
  );
}
