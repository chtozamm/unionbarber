import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative  mx-auto mt-4 flex w-full max-w-[1100px] items-center justify-between px-3 md:px-6">
      <div className="w-full">
        <Link href="/" className="flex w-fit items-center">
          <div className="col-span-1 flex justify-center">
            <div className="relative block h-20 w-20 select-none md:h-24 md:w-24">
              <Image
                src="/logotype.svg"
                fill={true}
                sizes="(min-width: 640px) 96px, 80px"
                priority
                alt="Юнион барбершоп"
              />
            </div>
          </div>
          <h1 className="tracking-norma w-full px-3 text-lg font-bold leading-5 md:text-xl md:leading-6">
            Барбершоп
            <br />
            Юнион
            <br />
            <span className="text-xs font-normal text-gray-500 md:text-sm">
              Псков
            </span>
          </h1>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}
