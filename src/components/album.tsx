import Image from "next/image";

export default function Album() {
  return (
    <section
      id="album"
      className="mb-4 flex w-screen max-w-[1100px] select-none scroll-m-4 flex-col gap-1 md:gap-3 md:px-6"
    >
      <div className=" relative aspect-video overflow-hidden bg-gray-100 md:rounded-2xl">
        <Image src="/gallery/wide-1.jpg" fill alt="" priority />
      </div>
      <div className="xs:grid-cols-2 grid grid-cols-2 gap-x-1 gap-y-1 md:grid-cols-3 md:gap-x-3 md:gap-y-3 lg:grid-cols-3">
        {Array.from(Array(18).keys()).map((_, idx) => (
    <div key={idx}>
      <div className="relative aspect-square overflow-hidden bg-gray-200 md:rounded-xl">
          <Image alt="" src={`/gallery/${idx+1}.jpg`} fill />
      </div>
    </div>
        ))}
      </div>
    </section>
  );
}