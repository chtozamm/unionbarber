import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Севастьян",
    position: "Управляющий барбер",
    image: "avatars/sevastian.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Руслан",
    position: "Управляющий барбер",
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
    position: "Старший барбер",
    image: "avatars/vladislav.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Кирилл",
    position: "Старший барбер",
    image: "avatars/kirill.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Артем",
    position: "Барбер",
    image: "avatars/artem.jpg",
    description: "Параграф о сотруднике",
  },
  {
    name: "Вадим",
    position: "Барбер",
    image: "avatars/vadim.jpg",
    description: "Параграф о сотруднике",
  },
];

export default function Team() {
  return (
    <div id="team" className="flex w-full scroll-m-4 flex-col gap-4 px-6">
      <h2 className="mb-2 text-lg font-semibold tracking-tight md:text-xl lg:mb-4">
        Наша команда:
      </h2>
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
