import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full">
      <ul className="grid gap-3 sm:gap-8 md:gap-16 lg:gap-24 grid-cols-[.75fr_1fr]">
        <li className="">
          <div className="flex h-full w-full select-none flex-col justify-end rounded-md md:rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
            <div className="h-20 w-20 relative">
              <Image src={"logotype.svg"} alt="логотип" sizes="80px" fill />
            </div>
            <div className="mb-2 mt-4 text-md sm:text-lg font-medium leading-5">
              Барбершоп Юнион
            </div>
            <p className="text-xs sm:text-sm leading-tight text-muted-foreground">
              Классический барбершоп в Пскове.
            </p>
          </div>
        </li>
        <li className="">
          <Link
            href="#"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">Наша команда</div>
            <p className="line-clamp-3 text-xs sm:text-sm leading-snug text-gray-500">
              Знакомство с нашим коллективом.
            </p>
          </Link>
          <Link
            href="#"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">Наши работы</div>
            <p className="line-clamp-3 text-xs sm:text-sm leading-snug text-gray-500">
              Фотографии работ, выполненных нашими мастерами.
            </p>
          </Link>
          <Link
            href="#"
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none">Контакты</div>
            <p className="line-clamp-3 text-xs sm:text-sm leading-snug text-gray-500">
              Мы на карте, в телефонной книге, в социальных сетях.
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
