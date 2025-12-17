"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, UserPlus, Menu, X, ShoppingBag } from "lucide-react";
import { useCartStore, CartState } from "@/store/useCartStore";
import CartSummary from "../features/shop/CartSummary";

const navLinks = [
    { href: "/about", label: "Nosotros" },
    { href: "/coffee-process", label: "Proceso" },
    { href: "/shop", label: "Tienda" },
];

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    
    const pathname = usePathname();
    const router = useRouter();
    const cartCount = useCartStore((state: CartState) => state.getCartCount());

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                setIsMenuOpen(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isMenuOpen) {
            const timer = setTimeout(() => setIsMenuOpen(false), 0);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="bg-(--primary-color) text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo / Brand */}
                        <div className="shrink-0">
                             <Link href="/" className="text-2xl font-bold text-(--text-color)">
                                Café Yamara
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center justify-center gap-8 text-lg text-(--text-color) font-bold">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className="relative px-3 py-2 hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color)"
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

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            {/* Cart Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsCartOpen(!isCartOpen)}
                                    className="p-2 rounded text-(--text-color) hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color) relative"
                                    aria-label="Carrito de compras"
                                >
                                    <ShoppingBag size={24} />
                                    {isMounted && cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#2D5016] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {isCartOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 top-full mt-4 z-50"
                                        >
                                            <CartSummary />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href="/login"
                                aria-label="Iniciar sesión"
                                className="p-2 rounded text-(--text-color) hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color)"
                            >
                                <LogIn size={24} aria-hidden="true" focusable="false" />
                                <span className="sr-only">Iniciar sesión</span>
                            </Link>

                            <Link
                                href="/register"
                                aria-label="Crear cuenta"
                                className="p-2 rounded text-(--text-color) hover:text-(--secondary-color) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color)"
                            >
                                <UserPlus size={24} aria-hidden="true" focusable="false" />
                                <span className="sr-only">Crear cuenta</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-(--text-color) hover:text-(--secondary-color) p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--secondary-color) rounded"
                                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-(--primary-color) border-t border-white/10 overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                                {navLinks.map((link) => {
                                     const isActive = pathname === link.href;
                                     return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`block px-3 py-2 text-xl font-bold ${isActive ? 'text-(--secondary-color)' : 'text-(--text-color)'} hover:text-(--secondary-color) transition-colors`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                     )
                                })}
                                <div className="flex gap-8 mt-6 pt-6 border-t border-white/10 w-full justify-center">
                                    <Link
                                        href="/login"
                                        className="flex flex-col items-center text-(--text-color) hover:text-(--secondary-color) transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <LogIn size={24} />
                                        <span className="text-sm mt-1">Login</span>
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="flex flex-col items-center text-(--text-color) hover:text-(--secondary-color) transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <UserPlus size={24} />
                                        <span className="text-sm mt-1">Registro</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    )
}