import { Metadata } from "next";
import Team from "./team";
import Contact from "./contact";
import Album from "./album";

export const metadata: Metadata = {
  title: "О нас | Union Barbershop",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-12 mt-4 max-w-[1100px] mx-auto px-4 md:px-6">
      <section
        id="home"
        className="w-screen md:w-full bg-zinc-100 md:rounded-3xl"
      >
        <div className="select-none aspect-video relative overflow-hidden md:rounded-3xl"></div>
      </section>
      <Team />
      <Album />
      <Contact />
    </main>
  );
}
