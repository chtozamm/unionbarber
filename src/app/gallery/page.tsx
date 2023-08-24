import Construction from "@/components/construction";
import Album from "@/components/album";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-1 lg:gap-12 mt-4 max-w-[1100px] mx-auto px-4 md:px-6">
      <section id="home" className="w-screen md:w-full">
        <div className="select-none aspect-video relative overflow-hidden md:rounded-3xl bg-zinc-100 saturate-0">
          <Image
            src="/photos/et1mClqItls.jpg"
            fill
            className="object-cover object-top"
            alt=""
          />
        </div>
      </section>
      {/* <Construction /> */}
      <Album />
    </main>
  );
}
