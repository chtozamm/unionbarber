import Construction from "@/components/construction";
import Album from "@/components/album";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-1 md:gap-3 mt-4 max-w-[1100px] mx-auto px-4 md:px-6">
      <Album />
    </main>
  );
}
