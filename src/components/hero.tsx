import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section id="home" className="w-screen md:w-full">
      <div className=" relative aspect-video overflow-hidden md:rounded-2xl">
        <Image
          src="/hero.jpg"
          fill={true}
          className="pointer-events-none select-none brightness-50"
          sizes="(max-width: 375px) 375px, (max-width: 640px): 640px, 1100px"
          alt="Барбер делает стрижку клиенту в фирменной футболке Union Barbershop"
          priority
        />
        <div className="absolute left-[50%] right-[50%] top-[50%] mt-2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-4 px-2 text-center text-white sm:gap-6 lg:mt-8 lg:gap-8">
          <p className="text-sm leading-5 sm:text-base sm:leading-5 lg:text-lg lg:leading-7">
            <Balancer>
              Ценим <strong>традиции</strong>, превозносим{" "}
              <strong>качество</strong>, соблюдаем <strong>стиль</strong>.<br />
              Индивидуальный подход к каждому клиенту. <br />
              Уютная, непринужденная атмосфера классического барбершопа.
            </Balancer>
          </p>
          <Sheet>
            <SheetTrigger className="lg:text-md inline-flex w-fit items-center justify-center rounded-md border border-gray-50 bg-transparent py-2 pl-2 pr-4 text-xs font-semibold text-gray-50 shadow-sm transition-colors hover:border-gray-300 hover:text-gray-300 focus-visible:border-gray-300 focus-visible:text-gray-300 focus-visible:outline-none sm:text-sm lg:py-3  lg:pl-3 lg:pr-5">
              <ChevronRight className="mr-1 h-4 w-4" />
              Записаться на стрижку
            </SheetTrigger>
            <SheetContent className="fixed w-full px-0 pb-0  md:max-w-2xl ">
              <iframe
                height="100%"
                width="100%"
                className="scale-90 rounded-2xl"
                id="ms_booking_iframe"
                src="https://n891186.yclients.com/select-city/109/select-branch?o="
              ></iframe>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
