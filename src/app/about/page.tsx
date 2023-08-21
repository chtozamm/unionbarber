import Filler from "@/components/filler";
import About from "@/components/about";
import Album from "@/components/album";
import Construction from "@/components/construction";
import Team from "@/components/team";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-12 mt-4 max-w-[1100px] mx-auto px-4 md:px-6">
      {/* <About /> */}
      {/* <Team /> */}
      <Construction />
      {/* <Album /> */}
    </main>
  );
}
