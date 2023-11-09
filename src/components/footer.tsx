import { Phone } from "lucide-react";
import telegramIcon from "../../public/telegram-logo.svg";
import vkIcon from "../../public/vk-logo.svg";
import whatsappIcon from "../../public/whatsapp-logo.svg";
import logotype from "../../public/logotype.svg";
import Image from "next/image";
import mapPin from "../../public/pin-icon.svg";
import ExternalLink from "./external-link";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="grid grid-cols-2 md:grid-cols-3 justify-items-center text-zinc-500 text-xs gap-2 px-6 max-w-[1100px] mx-auto border-t py-8 lg:py-12"
    >
      <section className="w-full flex flex-col justify-center items-center">
        <h4 className="font-semibold tracking-tight">Контакты:</h4>
        <ul className="mt-4 flex flex-col gap-1.5">
          <ExternalLink
            url="https://yandex.ru/maps/-/CDqVI~q"
            address="Кузнецкая улица, 17/2"
            title="Открыть адрес в Яндекс Картах?"
            label="Продолжить"
            image={mapPin}
            alt="На карте"
            sizes="w-3 h-3"
          />
          <a
            href="tel:+79532330099"
            className="mb-3 text-zinc-500 group focus-visible:outline-none focus-within:text-zinc-700 transition-colors duration-150 ease-in-out"
          >
            <span className="flex gap-1.5 items-center text-zinc-500 group-hover:text-zinc-700 group-focus:text-zinc-700">
              <Phone className="w-3 h-3" fill="#a1a1aa" stroke="#a1a1aa" />
              +7 (953) 233-00-99
            </span>
          </a>
          <ExternalLink
            url="https://yandex.ru/maps/-/CDqVUnD"
            address="Балтийская улица, 14Б"
            title="Открыть адрес в Яндекс Картах?"
            label="Продолжить"
            image={mapPin}
            alt="На карте"
            sizes="w-3 h-3"
          />
          <a
            href="tel:+79952401340"
            className="text-zinc-500 group focus-visible:outline-none focus-within:text-zinc-700 transition-colors duration-150 ease-in-out"
          >
            <span className="flex gap-1.5 items-center text-zinc-500 group-hover:text-zinc-700 group-focus:text-zinc-700">
              <Phone className="w-3 h-3" fill="#a1a1aa" stroke="#a1a1aa" />
              +7 (995) 240-13-40
            </span>
          </a>
        </ul>
      </section>
      <section className="w-full flex flex-col items-center">
        <h4 className="font-semibold tracking-tight">Социальные сети:</h4>
        <ul className="mt-4 flex flex-col gap-1.5">
          <ExternalLink
            url="https://vk.com/union_barbershop"
            address="VK"
            title="Перейти на сайт vk.com?"
            label="Продолжить"
            image={vkIcon}
            alt="VK"
            sizes="h-4 w-4"
          />
          <ExternalLink
            url="https://t.me/unionbarber"
            address="Telegram"
            title="Перейти в Telegram?"
            label="Продолжить"
            image={telegramIcon}
            alt="Telegram"
            sizes="w-4 h-4"
          />
          <ExternalLink
            url="https://wa.me/79532330099"
            address="WhatsApp"
            title="Перейти в WhatsApp?"
            label="Продолжить"
            image={whatsappIcon}
            alt="WhatsApp"
            sizes="w-4 h-4"
          />
        </ul>
      </section>
      <section className="flex mt-8 md:mt-0 col-span-2 md:col-span-1 flex-col gap-2 justify-center items-center w-full">
        <Link href="/">
          <div className="relative h-16 w-16 select-none">
            <Image src={logotype} alt="логотип" fill sizes="64px" />
          </div>
        </Link>
        <span className="">© Union Barbershop 2023</span>
      </section>
    </footer>
  );
}
