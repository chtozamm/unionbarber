import Image from "next/image";

type Picture = {
  title: string;
  src: string;
  className: string;
};

export default function Picture({ title, src, className }: Picture) {
  return <Image alt={title} src={src} fill className={className} />;
}
