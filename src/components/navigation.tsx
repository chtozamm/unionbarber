"use client";

import { useState, useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: React.RefObject<any>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: Event) {
        if (menuOpened && ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <button
        className="md:hidden p-4"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <HamburgerMenuIcon
          className={
            menuOpened
              ? "transition duration-300 rotate-180"
              : "transition duration-300 rotate--180"
          }
        />
      </button>
      <div
        ref={wrapperRef}
        className={cn(
          "absolute bg-white left-0 top-0 z-50 border mt-28 md:hidden w-screen aspect-video rounded-none flex justify-center items-center",
          menuOpened ? "flex" : "hidden"
        )}
      >
        {/* <NavigationMenu>
          <NavigationMenuList className="absolute flex flex-col">
            <NavigationMenuItem>
              <Link href={"/"} className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href={"/#services"}
                className={navigationMenuTriggerStyle()}
              >
                Услуги
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>О нас</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-3 p-4 w-full md:w-[400px]">
                  <ListItem href="#" title="Наша команда">
                    Знакомство с нашим коллективом.
                  </ListItem>
                  <ListItem href="#" title="Наши работы">
                    Фотографии работ, выполненных нашими мастерами.
                  </ListItem>
                  <ListItem href="#" title="Контакты">
                    Мы на карте, в телефонной книге, в социальных сетях.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Sheet>
                <SheetTrigger className={navigationMenuTriggerStyle()}>
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
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
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
                <ListItem href="#" title="Наша команда">
                  Знакомство с нашим коллективом.
                </ListItem>
                <ListItem href="#" title="Наши работы">
                  Фотографии работ, выполненных нашими мастерами.
                </ListItem>
                <ListItem href="#" title="Контакты">
                  Мы на карте, в телефонной книге, в социальных сетях.
                </ListItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";