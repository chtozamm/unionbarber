"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

export default function ExternalLink({
  address,
  url,
  label,
  title,
  image,
  alt,
  sizes,
}: {
  address: string;
  url: string;
  label: string;
  title: string;
  image: string;
  alt: string;
  sizes: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-zinc-500 hover:text-zinc-700 focus-visible:outline-none focus-visible:text-zinc-700 transition-colors duration-150 ease-in-out">
        <li className="flex gap-1 items-center">
          <Image src={image} alt={alt} className={sizes} />
          {address}
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            Страница откроется в новой вкладке.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={() => window.open(url, "_blank")}>
            {label}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
