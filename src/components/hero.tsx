import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section id="home" className="w-screen md:w-full">
      <div className=" aspect-video relative overflow-hidden md:rounded-3xl">
        <Image
          src="/hero.jpg"
          fill={true}
          className="brightness-50 pointer-events-none select-none"
          sizes={"(max-width: 375px) 375px, (max-width: 640px): 640px, 1100px"}
          alt="Барбер делает стрижку клиенту в фирменной футболке Union Barbershop"
          priority
        />
        <div className="absolute px-2 mt-2 lg:mt-8 text-center flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] right-[50%] w-full">
          <p className="text-sm leading-5 sm:text-base lg:text-lg sm:leading-5 lg:leading-7">
            <Balancer>
              Ценим <strong>традиции</strong>, превозносим{" "}
              <strong>качество</strong>, соблюдаем <strong>стиль</strong>.<br />
              Индивидуальный подход к каждому клиенту. <br />
              Уютная, непринужденная атмосфера классического барбершопа.
            </Balancer>
          </p>
          <Sheet>
            <SheetTrigger className="text-xs inline-flex items-center justify-center rounded-md sm:text-sm font-semibold lg:text-md transition-colors focus-visible:outline-none focus-visible:border-zinc-300 focus-visible:text-zinc-300 pl-2 pr-4 py-2 lg:py-3 lg:pl-3 lg:pr-5 bg-transparent border border-zinc-50 text-zinc-50 shadow-sm hover:border-zinc-300  hover:text-zinc-300 w-fit">
              <ChevronRight className="h-4 w-4 mr-1" />
              Записаться на стрижку
            </SheetTrigger>
            <SheetContent className="fixed w-full px-0 pb-0  md:max-w-2xl ">
              <iframe
                height="100%"
                width="100%"
                className="scale-90 rounded-3xl"
                id="ms_booking_iframe"
                src="https://w891186.yclients.com/"
              ></iframe>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
