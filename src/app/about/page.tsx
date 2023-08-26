import About from "@/components/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-6 lg:gap-3 mt-4 max-w-[1100px] mx-auto px-4 md:px-6 mb-6">
      {/* <section id="home" className="w-screen max-w-[1100px] md:px-6">
      </section> */}
      <About />
    </main>
  );
}
