
import {Instagram, Linkedin, Facebook, Mail, Phone, MapPin} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--primary-color) text-(--text-color)">
      <div className="mx-auto max-w-7xl py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl ">Café Yamara</h3>
            <p className="text-lg max-w-sm">
              Llevando el aroma de las montañas santandereanas al mundo.
            </p>
          </div>
    
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl">Explora</h3>
            <ul className="flex flex-col gap-4 text-lg">
              <li><Link href="/about" className="hover:opacity-80 transition-opacity">Nosotros</Link></li>
              <li><Link href="/shop" className="hover:opacity-80 transition-opacity">Tienda</Link></li>
              <li><Link href="/blog" className="hover:opacity-80 transition-opacity">Blog</Link></li>
              <li><Link href="/recipes" className="hover:opacity-80 transition-opacity">Recetas</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl">Contacto</h3>
            <ul className="flex flex-col gap-4 text-lg">
              <li className="flex items-center gap-3">
                <Mail size={22} />
                <span>info@cafeyamara.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={22} />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={22} />
                <span>Guadalupe, Santander</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#a5c684]/30 pt-8 flex flex-col items-center gap-6">
            <div className="flex justify-center gap-8">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook size={28} />
              </a>
            </div>
            <p className="text-center font-medium">
              &copy; {new Date().getFullYear()} Cafe Yamara. Todos los derechos reservados.
            </p>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-[#a5c684] py-3">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {[...Array(10)].map((_, j) => (
                <span key={j} className="text-[#1D2F1D] font-serif font-bold text-3xl tracking-widest mx-6">
                  - COLOMBIAN COFFEE -
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
