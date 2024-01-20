import { ChevronRight, ImageIcon, Map, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Filler() {
  return (
    <section className="w-full">
      <ul className="grid grid-cols-[.75fr_1fr] gap-3 sm:grid-cols-2">
        <li className="block w-full">
          <Link href="/about" className="">
            <div className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:rounded-2xl">
              <div className="relative h-20 w-20 select-none">
                <Image src="logotype.svg" alt="логотип" sizes="80px" fill priority />
              </div>
              <div className="text-md mb-2 mt-4 font-medium leading-5 sm:text-lg">
                Барбершоп Юнион
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs leading-tight text-gray-500 sm:text-sm">
                  Классический барбершоп в Пскове.
                </p>
                <ChevronRight className="xs:w-6 xs:h-6 h-8 w-8 text-gray-400 sm:h-4 sm:w-4" />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 focus:bg-gray-50"
          >
            <div className="text-sm font-medium leading-none">
              <Users2 className=" mb-0.5 mr-1 inline-block h-4 w-4" />
              Наша команда
            </div>
            <p className="line-clamp-3 text-xs leading-snug text-gray-500 sm:text-sm">
              Барберы, администраторы и все причастные
            </p>
          </Link>
          <Link
            href="/gallery"
            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 focus:bg-gray-50"
          >
            <div className="text-sm font-medium leading-none">
              <ImageIcon className="mb-0.5 mr-1 inline-block h-4 w-4" />
              Наши работы
            </div>
            <p className="line-clamp-3 text-xs leading-snug text-gray-500 sm:text-sm">
              Альбом с работами, выполненными нашими мастерами
            </p>
          </Link>
          <Link
            href="/#contact"
            className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 focus:bg-gray-50"
          >
            <div className="text-sm font-medium leading-none">
              <Map className="mb-0.5 mr-1 inline-block h-4 w-4" />
              Контакты
            </div>
            <p className="line-clamp-3 text-xs leading-snug text-gray-500 sm:text-sm">
              Филиалы, телефон, социальные сети
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
