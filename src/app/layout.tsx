import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Барбершоп Юнион | Union Barbershop",
  description:
    "Мужская парикмахерская в Пскове с атмосферой классического барбершопа. Стрижем, бреем, создаем стиль.",
  openGraph: {
    title: "Барбершоп Юнион | Union Barbershop",
    description:
      "Мужская парикмахерская в Пскове с атмосферой классического барбершопа. Стрижем, бреем, создаем стиль.",
    url: "https://www.unionbarber.ru",
  },
  twitter: {
    title: "Барбершоп Юнион | Union Barbershop",
    description:
      "Мужская парикмахерская в Пскове с атмосферой классического барбершопа. Стрижем, бреем, создаем стиль.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
