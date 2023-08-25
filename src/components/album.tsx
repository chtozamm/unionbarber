"use client";

import Image from "next/image";
import { useState } from "react";

type Picture = {
  title: string;
  src: string;
};

const pictures = [
  { title: "Барбершоп", src: "/photos/bw/1.jpg" },
  { title: "Барбершоп", src: "/photos/bw/2.jpg" },
  { title: "Барбершоп", src: "/photos/bw/3.jpg" },
  { title: "Барбершоп", src: "/photos/bw/4.jpg" },
  { title: "Барбершоп", src: "/photos/bw/5.jpg" },
  { title: "Барбершоп", src: "/photos/bw/6.jpg" },
  { title: "Барбершоп", src: "/photos/bw/7.jpg" },
  { title: "Барбершоп", src: "/photos/bw/8.jpg" },
  { title: "Барбершоп", src: "/photos/bw/9.jpg" },
  { title: "Барбершоп", src: "/photos/bw/10.jpg" },
  { title: "Барбершоп", src: "/photos/bw/11.jpg" },
  { title: "Барбершоп", src: "/photos/bw/12.jpg" },
  { title: "Барбершоп", src: "/photos/bw/13.jpg" },
  { title: "Барбершоп", src: "/photos/bw/14.jpg" },
  { title: "Барбершоп", src: "/photos/bw/15.jpg" },
  { title: "Барбершоп", src: "/photos/bw/16.jpg" },
  { title: "Барбершоп", src: "/photos/bw/17.jpg" },
  { title: "Барбершоп", src: "/photos/bw/18.jpg" },
];

export default function Album() {
  const [isLoading, setLoading] = useState(true);
  return (
    <section
      id="album"
      className="scroll-m-4 flex flex-col gap-1 md:gap-3 w-screen max-w-[1100px] md:px-6 mb-4"
    >
      <div className="select-none aspect-video relative overflow-hidden md:rounded-3xl bg-zinc-100 saturate-0">
        <Image
          src="/photos/bw/wide-1.jpg"
          fill
          className={`
          group-hover:opacity-75 object-cover duration-700 ease-in-out
          ${isLoading ? "blur-2xl scale-110" : "blur-0 scale-100"}
          `}
          onLoadingComplete={() => setLoading(false)}
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 gap-y-1 gap-x-1 md:gap-y-3 md:gap-x-3 xs:grid-cols-2 lg:grid-cols-3 md:grid-cols-3">
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
      <div className="relative aspect-square overflow-hidden bg-gray-200 md:rounded-xl">
        <Image
          alt={picture.title}
          src={picture.src}
          fill
          className={`
        group-hover:opacity-75 object-cover duration-700 ease-in-out
        ${isLoading ? "blur-2xl scale-110" : "blur-0 scale-100"}
        `}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
