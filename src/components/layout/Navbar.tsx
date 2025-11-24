

// Componente Estructural
import Link from "next/link";


export default function Navbar() {
    return (
        <div> 
            <nav className="bg-(--primary-color) text-white p-6 flex justify-center items-center">
                <div className=" flex items-center justify-center gap-8 text-lg font-medium text-(--text-color) underline-offset-auto">
                    <Link href="/about" className="hover:no-underline hover:text-(--secondary-color)">Nosotros</Link>
                    <Link href="/coffee-process" className="hover:no-underline hover:text-(--secondary-color)">Process</Link>
                    <Link href="/shop/cart" className="hover:no-underline hover:text-(--secondary-color)">Carrito</Link>
                    <Link href="/location" className="hover:no-underline hover:text-(--secondary-color)">Sucursales</Link>
                </div>
            </nav>
        </div>
    )
}