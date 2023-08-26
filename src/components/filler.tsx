import { ChevronRight, ImageIcon, Map, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Filler() {
  return (
    <section className="w-full">
      <ul className="grid gap-3 grid-cols-[.75fr_1fr] sm:grid-cols-2">
        <li className="w-full block">
          <Link href="/about">
            <div className="flex h-full w-full select-none flex-col justify-end rounded-md md:rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
              <div className="h-20 w-20 relative">
                <Image src={"logotype.svg"} alt="логотип" sizes="80px" fill />
              </div>
              <div className="mb-2 mt-4 text-md sm:text-lg font-medium leading-5">
                Барбершоп Юнион
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm leading-tight text-muted-foreground">
                  Классический барбершоп в Пскове.
                </p>
                <ChevronRight className="w-8 h-8 xs:w-6 xs:h-6 sm:w-4 sm:h-4 text-zinc-400" />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">
              <Users2 className=" h-4 w-4 mr-1 mb-0.5 inline-block" />
              Наша команда
            </div>
            <p className="line-clamp-3 text-xs sm:text-sm leading-snug text-gray-500">
              Барберы, администраторы и все причастные
            </p>
          </Link>
          <Link
            href="/gallery"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">
              <ImageIcon className="w-4 h-4 mr-1 mb-0.5 inline-block" />
              Наши работы
            </div>
            <p className="line-clamp-3 text-xs sm:text-sm leading-snug text-gray-500">
              Альбом с работами, выполненными нашими мастерами
            </p>
          </Link>
          <Link
            href="/#contact"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">
              <Map className="w-4 h-4 mr-1 mb-0.5 inline-block" />
              Контакты
            </div>
            <p className="line-clamp-3 text-xs sm:text-sm leading-snug text-gray-500">
              Филиалы, телефон, социальные сети
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
