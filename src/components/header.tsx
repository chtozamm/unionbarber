import Image from "next/image";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="select-none flex justify-between items-center w-full px-3 md:px-6 mt-4 max-w-[1100px] mx-auto">
      <div className="col-span-1 flex justify-center">
        <div className="relative block w-20 h-20 md:w-24 md:h-24">
          <Image
            src="/logotype.svg"
            fill={true}
            sizes="(min-width: 640px) 96px, 80px"
            priority
            alt="Юнион барбершоп"
          />
        </div>
      </div>
      <h1 className="text-lg md:text-xl px-3 w-full font-bold tracking-tight leading-5 md:leading-6">
        Барбершоп
        <br />
        Юнион
        <br />
        <span className="font-normal text-xs md:text-sm text-muted-foreground">
          Псков
        </span>
      </h1>
      <Navigation />
    </header>
  );
}
