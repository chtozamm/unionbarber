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
import { ImageIcon, Map, MenuIcon, Users2 } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <button
        aria-label="Меню"
        className="flex items-center justify-start gap-1 p-4 sm:hidden"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <MenuIcon
          className={cn(
            "h-5 w-5",
            menuOpened
              ? "rotate-180 transition duration-300"
              : "rotate--180 transition duration-300",
          )}
        />
      </button>
      <div
        className={cn(
          "absolute -left-full top-0 z-50 mt-24 grid aspect-video w-screen grid-cols-[1fr_1fr] items-center gap-6 rounded-none border  bg-white px-6 transition duration-500 ease-out sm:hidden",
          menuOpened
            ? "translate-x-full fade-in-0"
            : "pointer-events-none ease-in fade-out-0",
        )}
      >
        <nav className="relative flex flex-col items-start justify-start gap-3">
          <Link
            href="/"
            className="bg-background group flex h-9 w-full items-center justify-start gap-1.5 rounded-none border-b p-0 px-4 py-2 text-xs font-medium text-gray-900 hover:bg-white"
            onClick={() => setMenuOpened(false)}
          >
            <span>Главная</span>
          </Link>
          <Link
            href="/#services"
            className="bg-background group flex h-9 w-full items-center justify-start gap-1.5 rounded-none border-b p-0 px-4 py-2 text-xs font-medium text-gray-900 hover:bg-white"
            onClick={() => setMenuOpened(false)}
          >
            <span>Услуги</span>
          </Link>
          <Link
            href="/about"
            className="bg-background group flex h-9 w-full items-center justify-start gap-1.5 rounded-none border-b p-0 px-4 py-2 text-xs font-medium text-gray-900 hover:bg-white"
            onClick={() => setMenuOpened(false)}
          >
            <span>О нас</span>
          </Link>
          <Sheet>
            <SheetTrigger className="bg-background group flex h-9 w-full items-center justify-start gap-1.5 rounded-none border-b p-0 px-4 py-2 text-xs font-medium text-gray-900 hover:bg-white">
              <span>Записаться</span>
            </SheetTrigger>
            <SheetContent className="fixed w-full px-0 pb-0  md:max-w-2xl ">
              <iframe
                height="100%"
                width="100%"
                className="scale-90 rounded-2xl"
                id="ms_booking_iframe"
                src="https://w891186.yclients.com/"
              ></iframe>
            </SheetContent>
          </Sheet>
        </nav>
        <Link
          href="/gallery"
          onClick={() => setMenuOpened(false)}
          className="relative flex aspect-[5/6] max-h-44 w-full items-end justify-center overflow-hidden rounded-md"
        >
          <Image
            src="/gallery.jpg"
            fill
            alt=""
            className="object-cover"
          />
          <span className="absolute mr-1 w-full bg-[rgba(0,0,0,40%)] py-3 text-center text-xs text-white">
            <ImageIcon className="mb-0.5 mr-1 inline-block h-3 w-3" />
            Галерея
          </span>
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="hidden select-none sm:flex sm:flex-row">
          <NavigationMenuItem>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Главная
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#services" className={navigationMenuTriggerStyle()}>
              Услуги
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>О нас</NavigationMenuTrigger>
            <NavigationMenuContent className="select-none">
              <ul className="grid w-full gap-3 p-4 md:w-[400px]">
                <Link
                  href="/about"
                  className="block  space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
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
                  className="block  space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
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
                  href="#contact"
                  className="block  space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                >
                  <div className="text-sm font-medium leading-none">
                    <Map className="mb-0.5 mr-1 inline-block h-4 w-4" />
                    Контакты
                  </div>
                  <p className="line-clamp-3 text-xs leading-snug text-gray-500 sm:text-sm">
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
                  className="scale-90 rounded-2xl"
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
