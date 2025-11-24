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
            <Instagram className="inline-block" size={24} />
            <Linkedin className="inline-block" size={24} />
            <Facebook className="inline-block" size={24} />
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
