import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-screen px-3 gap-3 md:w-full aspect-video grid md:grid-cols-2 md:gap-6">
      <div className="flex flex-col gap-3 justify-between">
        <h3 className="text-lg md:text-3xl font-semibold tracking-tight text-center">
          О нас:
        </h3>
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Делаем мужские и детские стрижки, стрижем бороды, бритье.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Наши гости получают элегантный стиль, рекомендации по укладке и
            уходу за волосами, бесплатные напитки и хорошее настроение!
          </p>
        </div>
        <div className="relative h-80 rounded-3xl bg-zinc-100 overflow-hidden">
          {/* <Image src="/photos/0ndkjhyuieTksA.jpg" fill alt="" /> */}
        </div>
      </div>
      <div className="relative h-80 rounded-3xl bg-zinc-100 overflow-hidden">
        {/* <Image src="/photos/0mbkq9YaTXk.jpg" fill alt="" /> */}
      </div>
    </section>
  );
}
