import Album from "@/components/album";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея | Барбершоп Юнион",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-1 md:gap-3 mt-4 max-w-[1100px] mx-auto px-4 md:px-6 mb-4 sm:mb-6 lg:mb-10">
      <Album />
    </main>
  );
}
