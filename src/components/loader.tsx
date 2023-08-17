"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000);
  }, []);
  return (
    <div
      className={
        isLoaded
          ? "hidden"
          : "flex justify-center items-center text-center w-screen h-screen animate-pulse"
      }
    >
      Barbershop Union
    </div>
  );
}
