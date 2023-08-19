"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  ImageIcon,
  Map,
  MenuIcon,
  Users2,
} from "lucide-react";

export default function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-4 flex justify-start items-center gap-1"
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
          "absolute bg-white -left-full z-50 border top-0 mt-24 md:hidden w-screen aspect-video transition duration-500 ease-out rounded-none grid grid-cols-2 gap-3 p-3",
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
              "flex justify-start gap-1.5 items-center w-full"
            )}
            onClick={() => setMenuOpened(false)}
          >
            <ChevronRight className="h-3.5 w-3.5 mt-0.5" />
            Главная
          </Link>
          <Link
            href={"/#services"}
            className={cn(
              navigationMenuTriggerStyle(),
              "flex justify-start gap-1.5 items-center w-full"
            )}
            onClick={() => setMenuOpened(false)}
          >
            <ChevronRight className="h-3.5 w-3.5 mt-0.5" />
            Услуги
          </Link>
          <Link
            href={"/about"}
            className={cn(
              navigationMenuTriggerStyle(),
              "flex justify-start gap-1.5 items-center w-full"
            )}
            onClick={() => setMenuOpened(false)}
          >
            <ChevronRight className="h-3.5 w-3.5 mt-0.5" />О нас
          </Link>
          <Sheet>
            <SheetTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "flex justify-start gap-1.5 items-center w-full"
              )}
            >
              <ChevronRight className="h-3.5 w-3.5 mt-0.5" />
              <strong>Записаться</strong>
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
        <div className="rounded-md bg-zinc-100 p-8 h-full"></div>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex md:flex-row">
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
                  href="/about#work"
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

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-gray-500">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
