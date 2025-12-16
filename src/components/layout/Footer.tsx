
import {Instagram, Linkedin, Facebook, Mail, Phone, MapPin} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--primary-color) text-(--text-color)">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 text-center md:text-left">
          
          {/* Columna 1: Marca */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-3xl font-bold">Café Yamara</h3>
            <p className="text-lg max-w-xs mx-auto md:mx-0">
              Llevando el aroma de las montañas santandereanas al mundo.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-2xl font-semibold">Explora</h3>
            <ul className="flex flex-col gap-3 text-lg">
              <li>
                <Link
                  href="/about"
                  className="hover:text-(--secondary-color) transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-(--secondary-color) transition-colors"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-(--secondary-color) transition-colors"
                >
                  Sucursales
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-2xl font-semibold">Contacto</h3>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={20} />
                <span>info@cafeyamara.com</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={20} />
                <span>+57 300 123 4567</span>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/emNLxAqguqhKCK3r6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 justify-center md:justify-start hover:text-(--secondary-color) transition-colors"
                >
                  <MapPin size={20} />
                  <span>Guadalupe, Santander</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales y Copyright */}
        <div className="border-t border-[#a5c684]/30 pt-8 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--secondary-color) transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--secondary-color) transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--secondary-color) transition-colors transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
          </div>
          <p className="text-center text-sm md:text-base font-medium opacity-80">
            &copy; {new Date().getFullYear()} Cafe Yamara. Todos los derechos
            reservados.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden bg-[#a5c684] py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {[...Array(5)].map((_, j) => (
                <span
                  key={j}
                  className="text-[#1D2F1D] font-serif font-bold text-2xl md:text-3xl tracking-widest mx-4 md:mx-6"
                >
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
