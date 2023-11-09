import Picture from "@/components/picture";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "О нас | Барбершоп Юнион",
};

export default function AboutPage() {
  return (
    <main className="mx-auto mb-8 mt-4 flex max-w-[1100px] flex-col items-center gap-6 px-4 md:px-6 lg:gap-3">
      <section
        id="address"
        className="mt-6 flex w-full scroll-m-4 flex-col gap-4 px-6"
      >
        <h3 className="mb-2 text-lg font-semibold tracking-tight md:text-xl lg:mb-4">
          Адреса:
        </h3>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex w-full gap-3">
            <div className="w-full text-left duration-300">
              <h3 className="text-md mb-3 w-full font-medium leading-none">
                Кузнецкая улица, 17/2
              </h3>
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-t-md bg-zinc-100">
                Барбершоп
                {/* <Image
                  className="object-cover"
                  fill
                  alt="Барбершоп на Балтийской"
                  src={"/balt.jpg"}
                /> */}
              </div>
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-b-md bg-zinc-100">
                {/* Яндекс.Карты */}
                <Image
                  className="object-cover"
                  fill
                  alt="Кузнецкая на карте"
                  src={"/kuz-map.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3">
            <div className="w-full text-left duration-300">
              <h3 className="text-md mb-3 w-full font-medium leading-none">
                Балтийская улица, 14Б
              </h3>
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-t-md bg-zinc-100">
                Барбершоп
                {/* <Image
                  className="object-cover"
                  fill
                  alt="Барбершоп на Балтийской"
                  src={"/balt.jpg"}
                /> */}
              </div>
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-b-md bg-zinc-100">
                {/* Яндекс.Карты */}
                <Image
                  className="object-cover"
                  fill
                  alt="Балтийская на карте"
                  src={"/balt-map.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
