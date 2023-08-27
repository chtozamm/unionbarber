"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Picture = {
  title: string;
  src: string;
  className: string;
};

export default function Picture({ title, src, className }: Picture) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      alt={title}
      src={src}
      fill
      className={cn(
        `duration-700 ease-in-out
          ${isLoading ? "blur-sm scale-110" : "blur-0 scale-100"}
          `,
        className
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
