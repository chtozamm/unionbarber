import Filler from "@/components/filler";
import About from "@/components/about";
import Construction from "@/components/construction";
import Team from "@/components/team";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-12 mt-4 max-w-[1100px] mx-auto px-4 md:px-6 mb-6">
      <section id="home" className="w-screen sm:hidden">
        <div className="select-none aspect-video relative overflow-hidden md:rounded-3xl bg-zinc-100 saturate-0">
          <Image
            src="/photos/guests.jpg"
            fill
            className="object-cover object-left"
            alt=""
          />
        </div>
      </section>
      <About />
      {/* <Team /> */}
      {/* <Construction /> */}
    </main>
  );
}
