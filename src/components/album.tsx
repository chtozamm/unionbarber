import Image from "next/image";

type Picture = {
  title: string;
  src: string;
};

const pictures = [
  { title: "Барбершоп", src: "/photos/bw/1.jpg" },
  { title: "Барбершоп", src: "/photos/bw/2.jpg" },
  { title: "Барбершоп", src: "/photos/bw/3.jpg" },
  { title: "Барбершоп", src: "/photos/bw/4.jpg" },
  { title: "Барбершоп", src: "/photos/bw/5.jpg" },
  { title: "Барбершоп", src: "/photos/bw/6.jpg" },
  { title: "Барбершоп", src: "/photos/bw/7.jpg" },
  { title: "Барбершоп", src: "/photos/bw/8.jpg" },
  { title: "Барбершоп", src: "/photos/bw/9.jpg" },
  { title: "Барбершоп", src: "/photos/bw/10.jpg" },
  { title: "Барбершоп", src: "/photos/bw/11.jpg" },
  { title: "Барбершоп", src: "/photos/bw/12.jpg" },
  { title: "Барбершоп", src: "/photos/bw/13.jpg" },
  { title: "Барбершоп", src: "/photos/bw/14.jpg" },
  { title: "Барбершоп", src: "/photos/bw/15.jpg" },
  { title: "Барбершоп", src: "/photos/bw/16.jpg" },
  { title: "Барбершоп", src: "/photos/bw/17.jpg" },
  { title: "Барбершоп", src: "/photos/bw/18.jpg" },
];

export default function Album() {
  return (
    <section
      id="album"
      className="mb-4 flex w-screen max-w-[1100px] select-none scroll-m-4 flex-col gap-1 md:gap-3 md:px-6"
    >
      <div className=" relative aspect-video overflow-hidden bg-gray-100 md:rounded-2xl">
        <Image src="/photos/bw/wide-1.jpg" fill alt="" />
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
