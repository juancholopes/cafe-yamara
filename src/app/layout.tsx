import type { Metadata } from "next";
import {Rethink_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";


const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rethink-sans",
});

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yeseva-one",
});

export const metadata: Metadata = {
  title: "Cafe Yamara",
  description: "La mejor experiencia de café",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${rethinkSans.variable} ${yesevaOne.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
