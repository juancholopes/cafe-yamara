"use client";

import { motion } from "framer-motion";

// Componente UI Genérico
export default function Button({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
    return (
      <motion.button
        onClick={onClick}
        className={`bg-(--primary-color) text-(--secondary-color) py-6 px-8 rounded-2xl text-2xl cursor-pointer ${className}`}
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