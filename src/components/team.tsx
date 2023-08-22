import Link from "next/link";
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
    <section id="team" className="scroll-m-4 flex flex-col gap-4 w-screen">
      <Link href="/#team" className="w-fit mx-auto mb-2 lg:mb-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-center w-fit">
          Наша команда:
        </h3>
      </Link>
      <Tabs
        defaultValue="union"
        orientation="vertical"
        className="grid grid-cols-2"
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
        <TabsContent value="union">
          <li className="w-full block">
            <Link href="/about">
              <div className="flex h-full w-full aspect-[1/2] select-none flex-col rounded-xl md:rounded-3xl bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                <div className="h-20 w-20 relative mx-auto">
                  <Image src={"logotype.svg"} alt="логотип" sizes="80px" fill />
                </div>
              </div>
            </Link>
          </li>
        </TabsContent>
        {team.map((member) => (
          <TabsContent
            key={member.name}
            value={member.name}
            className="text-center"
          >
            {member.name}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
