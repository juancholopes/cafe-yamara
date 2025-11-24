// Componente Estructural
import Link from "next/link";

export default function Navbar() {
    return (
        <div> 
            <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1>Café Yamara</h1>
                <div className="space-x-4 flex items-center justify-center ">
                    <Link href="/menu" className="hover:underline">Menú</Link>
                    <Link href="/about" className="hover:underline">Nosotros</Link>
                    <Link href="/contact" className="hover:underline">Contacto</Link>
                    <Link href="/shop/cart" className="hover:underline">Carrito</Link>
                </div>
            </nav>
        </div>
    )
}