import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div id="team" className="flex w-full scroll-m-4 flex-col gap-4 px-6">
      <h3 className="mb-2 text-lg font-semibold tracking-tight md:text-xl lg:mb-4">
        Наша команда:
      </h3>
      {team.map((member) => (
        <div key={member.name} className="group flex w-full gap-3">
          <Avatar>
            {/* <AvatarImage src={member.image} alt={member.name} /> */}
            <AvatarFallback>{member.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-left duration-300 group-hover:text-gray-600 sm:pr-8">
            <span className="text-sm font-medium leading-none">
              {member.name}
            </span>
            <span className="line-clamp-3 text-xs font-normal leading-snug text-gray-500">
              {member.position}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
