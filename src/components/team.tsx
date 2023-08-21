import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const team = [
  {
    name: "Севастьян",
    position: "Главный барбер",
    image: "avatars/sevastian.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Руслан",
    position: "Главный барбер",
    image: "avatars/ruslan.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Михаил",
    position: "Старший барбер",
    image: "avatars/mihail.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Андрей",
    position: "Старший барбер",
    image: "avatars/andrey.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Владислав",
    position: "Младший барбер",
    image: "avatars/vladislav.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Кирилл",
    position: "Младший барбер",
    image: "avatars/kirill.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Максим",
    position: "Администратор",
    image: "avatars/maxim.jpg",
    description: "Параграф о сотруднике",
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-m-4 flex flex-col gap-4 w-full">
      <Link href="/#team" className="w-fit mx-auto mb-2 lg:mb-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-center w-fit">
          Наша команда:
        </h3>
      </Link>
      <div className="grid gap-3 grid-cols-[1fr_.75fr] sm:grid-cols-2">
        <Tabs
          defaultValue="account"
          orientation="vertical"
          className="w-[400px] grid grid-cols-2"
        >
          <TabsList className="flex flex-col gap-3 justify-start bg-white h-fit w-full">
            {team.map((member) => (
              <TabsTrigger
                value={member.name}
                key={member.name}
                className="group w-full"
              >
                <div className="flex gap-3 w-full">
                  <Avatar className="group-hover:brightness-110 duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left group-hover:text-zinc-600 duration-300 sm:pr-8">
                    <span className="text-sm font-medium leading-none">
                      {member.name}
                    </span>
                    <span className="line-clamp-3 text-xs font-normal leading-snug text-gray-500">
                      {member.position}
                    </span>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {team.map((member) => (
            <TabsContent key={member.name} value={member.name}>
              {member.name}
            </TabsContent>
          ))}
        </Tabs>
        {/* <Accordion type="single" collapsible>
          {team.map((member) => (
            <AccordionItem
              key={member.name}
              value={member.name}
              className="group"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex gap-3">
                  <Avatar className="group-hover:brightness-110 duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left group-hover:text-zinc-600 duration-300 sm:pr-8">
                    <span className="text-sm font-medium leading-none">
                      {member.name}
                    </span>
                    <span className="line-clamp-3 text-xs font-normal leading-snug text-gray-500">
                      {member.position}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm">
                {member.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion> */}
        <li className="w-full block">
          <Link href="/about">
            <div className="flex h-full w-full select-none flex-col justify-start rounded-md md:rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
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
          </Link>
        </li>
      </div>
    </section>
  );
}
