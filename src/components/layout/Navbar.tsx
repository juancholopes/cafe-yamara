"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";

const navLinks = [
    { href: "/about", label: "Nosotros" },
    { href: "/coffee-process", label: "Proceso" },
    { href: "/shop/cart", label: "Carrito" },
    { href: "/location", label: "Sucursales" },
    { href: "/shop", label: "Tienda" },
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        navLinks.forEach((link) => {
            router.prefetch(link.href);
        });
    }, [router]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

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
            <nav className="bg-(--primary-color) text-white p-6">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                    {/* Columna izquierda (vacía o logo en el futuro) */}
                    <div />

                    {/* Centro: navegación */}
                    <div className="flex items-center justify-center gap-8 text-2xl text-(--text-color) font-bold relative">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className="relative px-4 py-2 hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-(--primary-color)"
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 top-full block h-0.5 w-full bg-(--secondary-color)"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Derecha: acciones */}
                    <div className="flex items-center justify-self-end gap-2">
                        <Link
                            href="/login"
                            aria-label="Iniciar sesión"
                            className="p-2 rounded text-(--text-color) hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-(--primary-color)"
                        >
                            <LogIn size={28} aria-hidden="true" focusable="false" />
                            <span className="sr-only">Iniciar sesión</span>
                        </Link>

                        <Link
                            href="/register"
                            aria-label="Crear cuenta"
                            className="p-2 rounded text-(--text-color) hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color) focus-visible:ring-offset-2 focus-visible:ring-offset-(--primary-color)"
                        >
                            <UserPlus size={28} aria-hidden="true" focusable="false" />
                            <span className="sr-only">Crear cuenta</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}