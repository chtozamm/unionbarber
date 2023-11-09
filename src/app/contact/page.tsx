import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | Барбершоп Юнион",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-3 mt-4 max-w-[1100px] mx-auto px-4 md:px-6 mb-8">
      <section
        id="address"
        className="scroll-m-4 flex flex-col gap-4 w-full mt-6 px-6"
      >
        <h3 className="mb-2 lg:mb-4 text-lg md:text-xl font-semibold tracking-tight">
          Адреса:
        </h3>
        <div className="flex gap-3 group w-full">
          <div className="text-left group-hover:text-zinc-600 duration-300 sm:pr-8">
            <span className="text-sm font-medium leading-none"></span>
            <span className="line-clamp-3 text-xs font-normal leading-snug text-gray-500"></span>
          </div>
        </div>
      </section>
    </main>
  );
}
