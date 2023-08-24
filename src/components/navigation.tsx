"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Bookmark,
  FileSpreadsheet,
  HomeIcon,
  ImageIcon,
  Info,
  Map,
  MenuIcon,
  Users2,
} from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <button
        className="sm:hidden p-4 flex justify-start items-center gap-1"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <MenuIcon
          className={cn(
            "h-5 w-5",
            menuOpened
              ? "transition duration-300 rotate-180"
              : "transition duration-300 rotate--180"
          )}
        />
      </button>
      <div
        className={cn(
          "absolute bg-white -left-full z-50 border top-0 mt-24 sm:hidden w-screen aspect-video transition duration-500 ease-out  rounded-none grid grid-cols-[1fr_1fr] gap-6 px-6 items-center",
          menuOpened
            ? "fade-in-0 translate-x-full"
            : "fade-out-0 pointer-events-none ease-in"
        )}
      >
        <nav className="relative flex flex-col justify-start gap-3 items-start">
          <Link
            href={"/"}
            className={cn(
              navigationMenuTriggerStyle(),
              "flex justify-start gap-1.5 items-center w-full text-xs border-b rounded-none text-zinc-900 p-0 hover:bg-white"
            )}
            onClick={() => setMenuOpened(false)}
          >
            <span>Главная</span>
          </Link>
          <Link
            href={"/#services"}
            className={cn(
              navigationMenuTriggerStyle(),
              "flex justify-start gap-1.5 items-center w-full text-xs border-b rounded-none text-zinc-900 p-0 hover:bg-white"
            )}
            onClick={() => setMenuOpened(false)}
          >
            <span>Услуги</span>
          </Link>
          <Link
            href={"/about"}
            className={cn(
              navigationMenuTriggerStyle(),
              "flex justify-start gap-1.5 items-center w-full text-xs border-b rounded-none text-zinc-900 p-0 hover:bg-white"
            )}
            onClick={() => setMenuOpened(false)}
          >
            <span>О нас</span>
          </Link>
          <Sheet>
            <SheetTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "flex justify-start gap-1.5 items-center w-full text-xs border-b rounded-none text-zinc-900 p-0 hover:bg-white"
              )}
            >
              <span>Записаться</span>
            </SheetTrigger>
            <SheetContent className="fixed w-full px-0 pb-0  md:max-w-2xl ">
              <iframe
                height="100%"
                width="100%"
                className="scale-90 rounded-3xl"
                id="ms_booking_iframe"
                src="https://w891186.yclients.com/"
              ></iframe>
            </SheetContent>
          </Sheet>
        </nav>
        <Link
          href="/gallery"
          onClick={() => setMenuOpened(false)}
          className="flex justify-center rounded-md w-full relative overflow-hidden items-end aspect-[5/6] max-h-44"
        >
          <Image
            src="/gallery.jpg"
            fill
            alt="Галерея"
            className="object-cover"
          />
          <span className="absolute text-white text-xs py-3 mr-1 bg-[rgba(0,0,0,40%)] w-full text-center">
            <ImageIcon className="w-3 h-3 mr-1 mb-0.5 inline-block" />
            Галерея
          </span>
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="hidden sm:flex sm:flex-row">
          <NavigationMenuItem>
            <Link href={"/"} className={navigationMenuTriggerStyle()}>
              Главная
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/#services"} className={navigationMenuTriggerStyle()}>
              Услуги
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>О нас</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-full md:w-[400px]">
                <Link
                  href="/about#team"
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
                  href="/about#contact"
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
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Sheet>
              <SheetTrigger className={navigationMenuTriggerStyle()}>
                <strong>Записаться</strong>
              </SheetTrigger>
              <SheetContent className="fixed w-full px-0 pb-0 pt-12 md:max-w-2xl md:p-6 md:pt-12">
                <iframe
                  height="100%"
                  width="100%"
                  className="scale-90 rounded-3xl"
                  id="ms_booking_iframe"
                  src="https://w891186.yclients.com/"
                ></iframe>
              </SheetContent>
            </Sheet>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
