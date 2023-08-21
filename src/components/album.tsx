"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Picture = {
  title: string;
  src: string;
};

const pictures = [
  { title: "Барбершоп", src: "/album/barbershop.jpg" },
  { title: "Барбершоп", src: "/album/barbershop.jpg" },
  { title: "Барбершоп", src: "/album/barbershop.jpg" },
];

export default function Album() {
  return (
    <section id="album" className="scroll-m-4 flex flex-col gap-4 w-full mb-8">
      <Link href="/#album" className="w-fit mx-auto mb-2 lg:mb-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-center w-fit">
          Альбом:
        </h3>
      </Link>
      <div className="grid sm:grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-6 lg:grid-cols-3">
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
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-200">
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
  );
}
