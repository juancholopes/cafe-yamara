import type { Metadata } from "next";
// Importa tu Footer aquí si ya lo tienes listo, o comenta la línea si aún no
// import Footer from "@/components/layout/Footer"; 

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
    <html lang="es">
      <body>
        {/* Aquí iría tu Navbar */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
