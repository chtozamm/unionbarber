import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Baby, RussianRuble } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export default function Services() {
  const services = [
    { name: "Стрижка", price_premium: 1400, price_pro: 1000, price_young: 700 },
    {
      name: "Стрижка бороды",
      price_premium: 800,
      price_pro: 600,
      price_young: 400,
    },
    {
      name: "Комплекс: стрижка + борода",
      price_premium: 1800,
      price_pro: 1200,
      price_young: 900,
    },
    {
      name: "Детская стрижка",
      price_premium: 1400,
      price_pro: 1000,
      price_young: 700,
    },
    {
      name: "Стрижка под машинку",
      price_premium: 1100,
      price_pro: 800,
      price_young: 600,
    },
    {
      name: "Бритье головы/лица",
      price_premium: 1000,
      price_pro: 600,
      price_young: 600,
    },
  ];

  return (
    <section id="services" className="scroll-m-4 flex flex-col gap-4 w-full">
      <Link href="/#services" className="w-fit mx-auto mb-2 lg:mb-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-center w-fit">
          Наши услуги:
        </h3>
      </Link>
      <Table className="text-xs md:text-sm">
        <TableCaption className="w-full mt-8 lg:mt-12 text-xs font-normal leading-4 ">
          <Sheet>
            <SheetTrigger className="mx-auto text-xs flex items-center justify-center rounded-md sm:text-sm font-semibold lg:text-md transition-colors focus-visible:outline-none focus-visible:bg-zinc-100 focus-visible:text-zinc-900 disabled:pointer-events-none disabled:opacity-50 pl-3 pr-5 py-3 bg-zinc-900 text-zinc-50 shadow-sm hover:text-zinc-900 hover:bg-zinc-100 w-fit">
              <ChevronRight className="h-4 w-4 mr-1" />
              Записаться на стрижку
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
          <div className="grid grid-cols-2 my-8 lg:my-12">
            <span>
              <RussianRuble className="mx-auto mb-0.5 w-5 h-5" />
              <Balancer>
                Оплата наличными или переводом по номеру телефона.
              </Balancer>
            </span>
            <span>
              <Baby className="mx-auto mb-0.5 w-5 h-5" />
              <Balancer>Возрастное ограничение: 7 лет.</Balancer>
            </span>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Услуга</TableHead>
            <TableHead className="text-right">Главный барбер</TableHead>
            <TableHead className="text-right">Старший барбер</TableHead>
            <TableHead className="text-right">Младший барбер</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.name}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell className="text-right">
                {service.price_premium} ₽
              </TableCell>
              <TableCell className="text-right">
                {service.price_pro} ₽
              </TableCell>
              <TableCell className="text-right">
                {service.price_young} ₽
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
