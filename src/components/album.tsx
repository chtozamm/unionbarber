"use client";

import Image from "next/image";
import { useState } from "react";

type Picture = {
  title: string;
  src: string;
};

const pictures = [
  // { title: "Барбершоп", src: "/photos/et1mClqItls.jpg" },
  // { title: "Барбершоп", src: "/photos/KpAbLXeiCEc.jpg" },
  { title: "Барбершоп", src: "/photos/A0U8Ue52SwY.jpg" },
  { title: "Барбершоп", src: "/photos/Cl5Hi0us6-A.jpg" },
  { title: "Барбершоп", src: "/photos/4.webp" },
  { title: "Барбершоп", src: "/photos/3.jpg" },
  { title: "Барбершоп", src: "/photos/2jVGlutk_94.jpg" },
  { title: "Барбершоп", src: "/photos/dvpUJ2oe2_A.jpg" },
  { title: "Барбершоп", src: "/photos/SVNNiwYc7O0.jpg" },
  { title: "Барбершоп", src: "/photos/amC3zxqAp7A.jpg" },
  { title: "Барбершоп", src: "/photos/0d5ZiVczuk0.jpg" },
  { title: "Барбершоп", src: "/photos/0MdxVUTiYnU.jpg" },
  { title: "Барбершоп", src: "/photos/2KDfQMlpuL0.jpg" },
  { title: "Барбершоп", src: "/photos/hqqJRwSAkvU.jpg" },
];

export default function Album() {
  return (
    <section
      id="album"
      className="scroll-m-4 flex flex-col gap-4 w-screen max-w-[1100px] mb-4"
    >
      <div className="grid grid-cols-2 gap-y-1 gap-x-1 xs:grid-cols-2 lg:grid-cols-3 md:grid-cols-3">
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
      <div className="relative aspect-square overflow-hidden bg-gray-200 saturate-0">
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
    </div>
  );
}
