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

export default function Services() {
  const services = [
    { name: "Стрижка", price_premium: 1600, price_pro: 1400, price_young: 1200 },
    {
      name: "Стрижка бороды",
      price_premium: 1000,
      price_pro: 800,
      price_young: 600,
    },
    {
      name: "Комплекс: стрижка + борода",
      price_premium: 2200,
      price_pro: 1800,
      price_young: 1600,
    },
    {
      name: "Детская стрижка",
      price_premium: 1600,
      price_pro: 1400,
      price_young: 1200,
    },
    {
      name: "Стрижка машинкой",
      price_premium: 1300,
      price_pro: 1100,
      price_young: 900,
    },
    {
      name: "Бритье головы/лица",
      price_premium: 1000,
      price_pro: 1000,
      price_young: 1000,
    },
  ];

  return (
    <section
      id="services"
      className="-mb-8 flex w-full scroll-m-6 flex-col gap-4"
    >
      <h2 className="mx-auto mb-2 w-fit text-center text-lg font-semibold tracking-tight md:text-xl lg:mb-4">
        Наши услуги:
      </h2>
      <Table className="text-xs md:text-sm">
        <TableCaption className="mt-8 w-full text-xs font-normal leading-4 lg:mt-12 ">
          <Sheet>
            <SheetTrigger className="lg:text-md mx-auto flex w-fit items-center justify-center rounded-md bg-gray-900 py-3 pl-3 pr-5 text-xs font-semibold text-gray-50 shadow-sm transition-colors hover:bg-gray-700 focus-visible:bg-gray-700 focus-visible:text-gray-900 focus-visible:outline-none sm:text-sm">
              <ChevronRight className="mr-1 h-4 w-4" />
              Записаться на стрижку
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
          <div className="my-8 grid grid-cols-2 lg:my-12">
            <span>
              <RussianRuble className="mx-auto mb-0.5 h-5 w-5" />
              <Balancer>
                Оплата наличными или переводом по номеру телефона.
              </Balancer>
            </span>
            <span>
              <Baby className="mx-auto mb-0.5 h-5 w-5" />
              <Balancer>Возрастное ограничение: 7 лет.</Balancer>
            </span>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Услуга</TableHead>
            <TableHead className="text-right">Управляющий барбер</TableHead>
            <TableHead className="text-right">Старший барбер</TableHead>
            <TableHead className="text-right">Барбер</TableHead>
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
