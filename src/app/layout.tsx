// Layout general para toda la aplicación

import type { Metadata } from "next";
import {Rethink_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";
import { absoluteUrl, getSiteUrl } from "@/lib/seo";

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
  metadataBase: getSiteUrl(),
  title: {
    default: "Café Yamara",
    template: "%s | Café Yamara",
  },
  description:
    "Café de especialidad de Colombia. Conoce nuestra finca, proceso y compra café artesanal en línea.",
  applicationName: "Café Yamara",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: absoluteUrl("/"),
    siteName: "Café Yamara",
    title: "Café Yamara",
    description:
      "Café de especialidad de Colombia. Conoce nuestra finca, proceso y compra café artesanal en línea.",
    images: [
      {
        url: "/coffe-head.webp",
        width: 1200,
        height: 630,
        alt: "Café Yamara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Yamara",
    description:
      "Café de especialidad de Colombia. Conoce nuestra finca, proceso y compra café artesanal en línea.",
    images: ["/coffe-head.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Café Yamara",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/coffee-bag.svg"),
      },
      {
        "@type": "WebSite",
        name: "Café Yamara",
        url: absoluteUrl("/"),
        inLanguage: "es-CO",
      },
    ],
  };

  return (
    <html lang="es-CO" className={`${rethinkSans.variable} ${yesevaOne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-(--primary-color) text-(--text-color) ">
        {children}
      </body>
    </html>
  );
}
