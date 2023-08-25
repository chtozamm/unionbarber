import Image from "next/image";
import Team from "./team";

export default function About() {
  return (
    <section className="w-screen md:w-full sm:mb-6">
      <div className="sm:grid sm:grid-cols-2 sm:gap-3">
        <div className="flex flex-col sm:mt-3 text-sm px-6 sm:col-start-1 sm:col-end-1 sm:row-span-1">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            О нас:
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Делаем мужские и детские стрижки, стрижем бороды, бреем лица.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Наши гости получают элегантный стиль, рекомендации по укладке и
            уходу за волосами, бесплатные напитки и хорошее настроение.
          </p>
        </div>
        <Team />
      </div>
    </section>
  );
}
