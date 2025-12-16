"use client";

import { motion, HTMLMotionProps } from "framer-motion";

// Componente UI Genérico
type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: ButtonVariant;
}

export default function Button({
    children,
    className = "",
    variant = "primary",
    ...props
}: ButtonProps) {
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
        className={`${baseClassesByVariant[variant]} py-4 px-8 rounded-2xl text-xl font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        whileHover={{ 
          scale: 1.02, 
          y: -2,
          backgroundColor: variant === 'outline' ? "var(--secondary-color)" : undefined,
          color: variant === 'outline' ? "var(--primary-color)" : undefined
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        {...props}
      >
        {children}
      </motion.button>
    );
}