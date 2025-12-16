"use client";

import { motion } from "framer-motion";

// Componente UI Genérico
type ButtonVariant = "primary" | "secondary" | "outline";

export default function Button({
    children,
    onClick,
    className = "",
    variant = "primary",
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: ButtonVariant;
}) {
    const baseClassesByVariant: Record<ButtonVariant, string> = {
        primary:
            "bg-(--primary-color) text-(--secondary-color)",
        secondary:
            "bg-(--secondary-color) text-(--primary-color)",
        outline:
            "bg-transparent text-(--secondary-color) border-2 border-(--secondary-color)",
    };

    return (
      <motion.button
        onClick={onClick}
        className={`${baseClassesByVariant[variant]} py-6 px-8 rounded-2xl text-2xl cursor-pointer ${className}`}
        whileHover={{ 
          scale: 1.1, 
          y: -4,
          backgroundColor: "var(--secondary-color)",
          color: "var(--primary-color)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {children}
      </motion.button>
    );
}