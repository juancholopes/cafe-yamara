// Layout general para toda la aplicación

import type { Metadata } from "next";
import {Rethink_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

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
      <body className="flex flex-col min-h-screen bg-(--primary-color) text-(--text-color) ">
        <Navbar />
        <main className="flex-1 flex flex-col mt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
