"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, SendHorizonal } from "lucide-react";

type Picture = {
  title: string;
  src: string;
};

const pictures = [
  { title: "Барбершоп", src: "/photos/amC3zxqAp7A.jpg" },
  { title: "Барбершоп", src: "/photos/KpAbLXeiCEc.jpg" },
  { title: "Барбершоп", src: "/photos/A0U8Ue52SwY.jpg" },
  { title: "Барбершоп", src: "/photos/Cl5Hi0us6-A.jpg" },
  { title: "Барбершоп", src: "/photos/et1mClqItls.jpg" },
  { title: "Барбершоп", src: "/photos/2jVGlutk_94.jpg" },
  { title: "Барбершоп", src: "/photos/2KDfQMlpuL0.jpg" },
  { title: "Барбершоп", src: "/photos/0d5ZiVczuk0.jpg" },
  { title: "Барбершоп", src: "/photos/0MdxVUTiYnU.jpg" },
  { title: "Барбершоп", src: "/photos/hqqJRwSAkvU.jpg" },
  { title: "Барбершоп", src: "/photos/dvpUJ2oe2_A.jpg" },
  { title: "Барбершоп", src: "/photos/SVNNiwYc7O0.jpg" },
];

export default function Album() {
  return (
    <section id="album" className="scroll-m-4 flex flex-col gap-4 w-full mb-8">
      {/* <Link href="/#album" className="w-fit mx-auto mb-2 lg:mb-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-center w-fit">
          Альбом:
        </h3>
      </Link> */}
      <div className="grid grid-cols-1 gap-y-1 xs:grid-cols-2 gap-x-1 lg:grid-cols-3 md:grid-cols-3">
        {pictures.map((picture) => (
          <Picture key={picture.src} picture={picture} />
        ))}
      </div>
    </section>
  );
}

export function Picture({ picture }: { picture: Picture }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div>
      {/* <div className="m-3 flex gap-3 items-center w-full xs:hidden">
        <Avatar className="group-hover:brightness-110 duration-300">
          <AvatarImage src="" alt="" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <div className="text-left  group-hover:text-zinc-600 duration-300 sm:pr-8">
          <span className="text-sm font-medium leading-none">Севастьян</span>
        </div>
      </div> */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
        <Image
          alt={picture.title}
          src={picture.src}
          fill
          className={`
        group-hover:opacity-75 object-cover duration-700 ease-in-out
        ${
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }
        `}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {/* <div className="m-3 flex gap-3 items-center w-full xs:hidden">
        <div className="text-left  group-hover:text-zinc-600 duration-300 sm:pr-8">
          <span className="text-sm font-medium leading-none flex gap-3">
            <Heart />
            <MessageCircle />
            <SendHorizonal />
          </span>
        </div>
      </div> */}
    </div>
  );
}
