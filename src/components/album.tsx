import Image from "next/image";

type Picture = {
  title: string;
  src: string;
};

const pictures = [
  { title: "Барбершоп", src: "/gallery/1.jpg" },
  { title: "Барбершоп", src: "/gallery/2.jpg" },
  { title: "Барбершоп", src: "/gallery/3.jpg" },
  { title: "Барбершоп", src: "/gallery/4.jpg" },
  { title: "Барбершоп", src: "/gallery/5.jpg" },
  { title: "Барбершоп", src: "/gallery/6.jpg" },
  { title: "Барбершоп", src: "/gallery/7.jpg" },
  { title: "Барбершоп", src: "/gallery/8.jpg" },
  { title: "Барбершоп", src: "/gallery/9.jpg" },
  { title: "Барбершоп", src: "/gallery/10.jpg" },
  { title: "Барбершоп", src: "/gallery/11.jpg" },
  { title: "Барбершоп", src: "/gallery/12.jpg" },
  { title: "Барбершоп", src: "/gallery/13.jpg" },
  { title: "Барбершоп", src: "/gallery/14.jpg" },
  { title: "Барбершоп", src: "/gallery/15.jpg" },
  { title: "Барбершоп", src: "/gallery/16.jpg" },
  { title: "Барбершоп", src: "/gallery/17.jpg" },
  { title: "Барбершоп", src: "/gallery/18.jpg" },
];

export default function Album() {
  return (
    <section
      id="album"
      className="mb-4 flex w-screen max-w-[1100px] select-none scroll-m-4 flex-col gap-1 md:gap-3 md:px-6"
    >
      <div className=" relative aspect-video overflow-hidden bg-gray-100 md:rounded-2xl">
        <Image src="/gallery/wide-1.jpg" fill alt="" />
      </div>
      <div className="xs:grid-cols-2 grid grid-cols-2 gap-x-1 gap-y-1 md:grid-cols-3 md:gap-x-3 md:gap-y-3 lg:grid-cols-3">
        {pictures.map((picture) => (
          <Picture key={picture.src} picture={picture} />
        ))}
      </div>
    </section>
  );
}

export function Picture({ picture }: { picture: Picture }) {
  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-gray-200 md:rounded-xl">
        <Image alt={picture.title} src={picture.src} fill />
      </div>
    </div>
  );
}
