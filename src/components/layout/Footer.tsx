// Componente Estructural
import {Instagram, Linkedin, Facebook} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-(--primary-color) text-(--text-color) p-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center">Contact Us</h1>
        <div className="flex flex-col items-start gap-4 my-4">
         <ul className="list-none text-center">
          <div className="font-bold flex flex-col justify-center items-center"><p>Social Media</p></div>
            <div className="flex justify-center gap-5 p-2">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook size={24} />
            </a>
            </div>
          </ul>
        </div>
        <div>
          <ul>

          </ul>
        </div>
        <p className="text-center font-bold">
          &copy; {new Date().getFullYear()} Cafe Yamara. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
