import Team from "./team";
import Picture from "./picture";

export default function About() {
  return (
    <section id="about" className="w-screen md:w-full sm:mb-6">
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
        <div className="select-none aspect-video relative overflow-hidden sm:col-start-2 md:rounded-3xl">
          <Picture
            title="Логотип Юнион Барбершоп"
            src="/logotype.svg"
            className="lg:p-12"
          />
        </div>
        <div className="flex flex-col justify-center text-sm px-6 sm:col-start-1 sm:row-start-1">
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
  );
}
