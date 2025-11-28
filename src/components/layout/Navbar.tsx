
"use client";

// Componente Estructural
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Ocultar al bajar (si pasamos 100px), mostrar al subir
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}> 
            <nav className="bg-(--primary-color) text-white p-6 flex justify-center items-center">
                <div className=" flex items-center justify-center gap-8 text-2xl text-(--text-color) underline-offset-auto text-bold">
                    <Link href="/about" className="hover:no-underline hover:text-(--secondary-color)">Nosotros</Link>
                    <Link href="/coffee-process" className="hover:no-underline hover:text-(--secondary-color)">Process</Link>
                    <Link href="/shop/cart" className="hover:no-underline hover:text-(--secondary-color)">Carrito</Link>
                    <Link href="/location" className="hover:no-underline hover:text-(--secondary-color)">Sucursales</Link>
                    <Link href="/shop" className="hover:no-underline hover:text-(--secondary-color)">Tienda</Link>
                </div>
            </nav>
        </div>
    )
}