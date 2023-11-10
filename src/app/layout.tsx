import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

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
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
