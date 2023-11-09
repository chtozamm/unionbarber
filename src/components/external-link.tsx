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
      <AlertDialogTrigger className="flex select-text items-center gap-1.5 text-left text-gray-500 transition-colors duration-150 ease-in-out hover:text-gray-700 focus-visible:text-gray-700 focus-visible:outline-none">
        <Image src={image} alt={alt} className={`${sizes} select-none`} />
        {address}
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
