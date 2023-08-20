import { Phone } from "lucide-react";
import telegramIcon from "../../public/telegram-logo.svg";
import vkIcon from "../../public/vk-logo.svg";
import whatsappIcon from "../../public/whatsapp-logo.svg";
import logotype from "../../public/logotype.svg";
import Image from "next/image";
import mapPin from "../../public/pin-icon.svg";
import ExternalLink from "./external-link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="grid grid-cols-2 md:grid-cols-3 justify-items-center text-zinc-500 text-xs gap-2 px-6 max-w-[1100px] mx-auto border-t py-8 lg:py-12"
    >
      <section className="w-full flex flex-col justify-center items-center">
        <h4 className="font-semibold tracking-tight">Контакты:</h4>
        <ul className="mt-4 [&>*>li]:mt-1">
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
            className="text-zinc-500 hover:text-zinc-700 focus-visible:outline-none focus-visible:text-zinc-700 transition-colors duration-150 ease-in-out"
          >
            <li className="flex gap-1.5 items-center text-zinc-500 hover:text-zinc-700 transition-colors duration-150 ease-in-out">
              <Phone className="w-3 h-3" fill="#a1a1aa" stroke="#a1a1aa" />
              +7 (953) 233-00-99
            </li>
          </a>
          <br />
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
            className="text-zinc-500 hover:text-zinc-700 focus-visible:outline-none focus-visible:text-zinc-700 transition-colors duration-150 ease-in-out"
          >
            <li className="flex gap-1.5 items-center text-zinc-500 hover:text-zinc-700 transition-colors duration-150 ease-in-out">
              <Phone className="w-3 h-3" fill="#a1a1aa" stroke="#a1a1aa" />
              +7 (995) 240-13-40
            </li>
          </a>
        </ul>
      </section>
      <section className="w-full flex flex-col items-center">
        <h4 className="font-semibold tracking-tight">Социальные сети:</h4>
        <ul className="mt-4 [&>*>li]:mt-1">
          <ExternalLink
            url="https://vk.com/union_barbershop"
            address="VK"
            title="Перейти на сайт vk.com?"
            label="Продолжить"
            image={vkIcon}
            alt="VK"
            sizes="h-4 w-4"
          />
          <br />
          <ExternalLink
            url="https://t.me/unionbarber"
            address="Telegram"
            title="Перейти в Telegram?"
            label="Продолжить"
            image={telegramIcon}
            alt="Telegram"
            sizes="w-4 h-4"
          />
          <br />
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
        <div className="relative h-16 w-16">
          <Image src={logotype} alt="логотип" fill sizes="64px" />
        </div>
        <span className="">© Union Barbershop 2023</span>
      </section>
    </footer>
  );
}
