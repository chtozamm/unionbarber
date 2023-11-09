import { ConstructionIcon, Info } from "lucide-react";

export default function Construction() {
  return (
    <section
      id="about"
      className="flex w-screen max-w-[1100px] scroll-m-4 flex-col gap-4"
    >
      <div className="flex aspect-video w-full flex-col items-center justify-around">
        <ConstructionIcon className="inline-block h-24 w-24 lg:h-48 lg:w-48" />
        <p className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
          <Info className="h-4 w-4" /> Раздел
          {/* &quot;О нас&quot;  */} в разработке
        </p>
      </div>
    </section>
  );
}
