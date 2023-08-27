"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    const body = document.querySelector("body")!;
    const loader: HTMLDivElement = document.querySelector("#loader")!;
    setTimeout(() => {
      body.style.overflow = "auto";
      loader.style.display = "none";
    }, 1500);
  }, []);

  return (
    <div
      id="loader"
      className="flex flex-col items-center justify-center z-50 fixed top-0 left-0 w-screen h-screen overflow-hidden bg-white"
    >
      <div className="relative block w-44 h-44 md:w-24 md:h-24">
        <Image
          src="/logotype.svg"
          fill
          sizes="(min-width: 640px) 96px, 80px"
          priority
          alt="Юнион барбершоп"
        />
      </div>
    </div>
  );
}
