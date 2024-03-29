import { Phone } from "lucide-react";
import Image from "next/image";
import ExternalLink from "./external-link";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto mt-8 grid max-w-[1100px] grid-cols-2 justify-items-center gap-2 border-t px-6 py-8 text-xs text-gray-500 md:grid-cols-3 lg:py-12"
    >
      <section className="flex w-full flex-col items-center justify-center">
        <h2 className="font-semibold tracking-tight">Контакты:</h2>
        <section className="mt-4 flex flex-col gap-1.5">
          <ExternalLink
            url="https://yandex.ru/maps/-/CDqVI~q"
            address="Кузнецкая улица, 17/2"
            title="Открыть адрес в Яндекс Картах?"
            label="Продолжить"
            image="pin"
            alt="На карте"
            sizes="w-3 h-3"
          />
          <a
            href="tel:+79532330099"
            className="group mb-3 text-gray-500 transition-colors duration-150 ease-in-out focus-within:text-gray-700 focus-visible:outline-none"
          >
            <span className="flex items-center gap-1.5 text-gray-500 group-hover:text-gray-700 group-focus:text-gray-700">
              <Phone className="h-3 w-3" fill="#a1a1aa" stroke="#a1a1aa" />
              +7 (953) 233-00-99
            </span>
          </a>
          <ExternalLink
            url="https://yandex.ru/maps/-/CDqVUnD"
            address="Балтийская улица, 14Б"
            title="Открыть адрес в Яндекс Картах?"
            label="Продолжить"
            image="pin"
            alt="На карте"
            sizes="w-3 h-3"
          />
          <a
            href="tel:+79952401340"
            className="group text-gray-500 transition-colors duration-150 ease-in-out focus-within:text-gray-700 focus-visible:outline-none"
          >
            <span className="flex items-center gap-1.5 text-gray-500 group-hover:text-gray-700 group-focus:text-gray-700">
              <Phone className="h-3 w-3" fill="#a1a1aa" stroke="#a1a1aa" />
              +7 (995) 240-13-40
            </span>
          </a>
        </section>
      </section>
      <section className="flex w-full flex-col items-center">
        <h2 className="font-semibold tracking-tight">Социальные сети:</h2>
        <section className="mt-4 flex flex-col gap-1.5">
          <ExternalLink
            url="https://vk.com/union_barbershop"
            address="VK"
            title="Перейти на сайт vk.com?"
            label="Продолжить"
            image="vk"
            alt="icon"
            sizes="h-4 w-4"
          />
          <ExternalLink
            url="https://t.me/unionbarber"
            address="Telegram"
            title="Перейти в Telegram?"
            label="Продолжить"
            image="telegram"
            alt="icon"
            sizes="w-4 h-4"
          />
          <ExternalLink
            url="https://wa.me/79532330099"
            address="WhatsApp"
            title="Перейти в WhatsApp?"
            label="Продолжить"
            image="whatsapp"
            alt="icon"
            sizes="w-4 h-4"
          />
        </section>
      </section>
      <section className="col-span-2 mt-8 flex w-full flex-col items-center justify-center gap-2 md:col-span-1 md:mt-0">
        <Link href="/">
          <div className="relative h-16 w-16 select-none">
              <Image
                src="/logotype.svg"
                fill
                sizes="64px"
                priority
                alt="Юнион барбершоп"
              />
          </div>
        </Link>
        <span className="">© Union Barbershop 2024</span>
      </section>
    </footer>
  );
}
