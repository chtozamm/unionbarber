import Image from "next/image";
import Team from "./team";
import { Balancer } from "react-wrap-balancer";

export default function About() {
  return (
    <section className="w-screen md:w-full">
      <div className="sm:grid sm:grid-cols-2 sm:gap-3">
        {/* <div className="select-none aspect-video relative sm:rounded-3xl sm:col-start-2 sm:col-end-2 sm:row-start-2 overflow-hidden bg-zinc-100"> */}
        {/* <Image
            src="/photos/0ndkjhyuieTksA.jpg"
            fill={true}
            className="pointer-events-none object-cover"
            sizes={
              "(max-width: 375px) 375px, (max-width: 640px): 640px, 1100px"
            }
            alt="Барберы Union Barbershop в процессе работы"
            priority
          /> */}
        {/* </div> */}
        <div className="flex flex-col gap-6 text-sm px-6 sm:col-start-1 sm:col-end-1 sm:row-span-1">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            О нас:
          </h3>
          <Balancer className="inline-block">
            Делаем мужские и детские стрижки, стрижем бороды, бреем лица.
          </Balancer>
          <Balancer className="inline-block">
            Наши гости получают элегантный стиль, рекомендации по укладке и
            уходу за волосами, бесплатные напитки и хорошее настроение.
          </Balancer>
        </div>
        <Team />
      </div>
    </section>
  );
}
