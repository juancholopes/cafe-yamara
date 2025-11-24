// Componente Estructural
import {Instagram, Linkedin, Facebook} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-(--primary-color) text-(--text-color) p-4 mt-8 ">
      <div className="container pl-32 pr-32 ">
        <h1 className="text-center">Contact Us</h1>
        <div className="flex flex-col items-start gap-4 my-4">
         <ul className="list-none text-center">
           <p>Social Media</p>
            <div className="flex justify-center gap-5 p-2">
            <Instagram className="inline-block" />
            <Linkedin className="inline-block" />
            <Facebook className="inline-block" />
            </div>
          </ul>
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Cafe Yamara. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
