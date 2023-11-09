import Picture from "@/components/picture";
import { Metadata } from "next";
import Team from "./team";

export const metadata: Metadata = {
  title: "О нас | Барбершоп Юнион",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-3 mt-4 max-w-[1100px] mx-auto px-4 md:px-6 mb-8">
      <section id="about" className="w-screen md:w-full sm:mb-6">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
          <div className=" aspect-video relative overflow-hidden sm:col-start-2 md:rounded-3xl">
            <Picture
              title="Логотип Юнион Барбершоп"
              src="/logotype.svg"
              className="select-none"
            />
          </div>
          <div className="flex flex-col justify-center text-sm px-6 sm:col-start-1 sm:row-start-1 max-w-[470px]">
            <h3 className="text-xl md:text-3xl font-semibold tracking-tight">
              О нас:
            </h3>
            <p className="leading-5 mt-6 sm:mt-6">
              Делаем мужские и детские стрижки, стрижем бороды, бреем лица.
            </p>
            <p className="leading-5 [&:not(:first-child)]:mt-6">
              Наши гости получают элегантный стиль, рекомендации по укладке и
              уходу за волосами, бесплатные напитки и хорошее настроение.
            </p>
          </div>
          <div className="sm:col-start-1 ">
            <Team />
          </div>
        </div>
      </section>
    </main>
  );
}
