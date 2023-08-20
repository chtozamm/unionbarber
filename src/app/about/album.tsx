import { ConstructionIcon, Info } from "lucide-react";
import Link from "next/link";

export default function Album() {
  return (
    <section
      id="album"
      className="scroll-m-4 flex flex-col gap-4 w-screen max-w-[1100px]"
    >
      <div className="aspect-video w-full flex flex-col justify-around items-center">
        <ConstructionIcon className="inline-block h-24 w-24 lg:w-48 lg:h-48" />
        <p className="flex justify-center gap-1.5 items-center text-sm text-zinc-500">
          <Info className="w-4 h-4" /> Раздел &quot;Наши работы&quot; в
          разработке
        </p>
      </div>
    </section>
  );
}
