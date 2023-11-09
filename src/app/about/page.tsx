import Picture from "@/components/picture";
import { Metadata } from "next";
import Team from "./team";
import Image from "next/image";

export const metadata: Metadata = {
  title: "О нас | Барбершоп Юнион",
};

export default function AboutPage() {
  return (
    <main className="mx-auto mb-8 mt-4 flex max-w-[1100px] flex-col items-center gap-6 px-4 sm:px-6 lg:gap-3">
      <section id="about" className="w-screen sm:mb-6 sm:w-full">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
          <div className="relative aspect-video overflow-hidden sm:col-span-1 sm:row-start-3 sm:my-auto sm:hidden sm:max-w-[470px]">
            <Picture
              title="Логотип Юнион Барбершоп"
              src="/logotype.svg"
              className="select-none"
            />
          </div>
          <section className="flex max-w-[470px] flex-col justify-between px-6 text-sm sm:col-start-1 sm:row-start-2 sm:rounded-2xl sm:bg-gradient-to-b sm:from-gray-50 sm:to-gray-100 sm:py-6 sm:pt-6">
            <h3 className="text-xl font-semibold tracking-tight sm:text-3xl">
              О нас:
            </h3>
            <p className="mt-6 leading-5 sm:mt-6">
              Делаем мужские и детские стрижки, стрижем бороды, бреем лица.
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-6">
              Наши гости получают элегантный стиль, рекомендации по укладке и
              уходу за волосами, бесплатные напитки и хорошее настроение.
            </p>
            <div className="relative ml-auto mt-8 hidden h-32 w-32 select-none sm:block">
              <Image src={"logotype.svg"} alt="логотип" sizes="80px" fill />
            </div>
          </section>
          <div className="mb-6 mt-8 sm:col-span-2 sm:col-start-1 sm:row-start-1 sm:mb-8 sm:mt-auto">
            <div className="relative aspect-video overflow-hidden sm:rounded-2xl">
              <Image
                src={"/gallery/section-3.jpg"}
                fill
                alt="команда"
                className="object-cover"
              />
            </div>
          </div>
          <section className="sm:col-start-2 sm:row-start-2">
            <Team />
          </section>
        </div>
      </section>
    </main>
  );
}
