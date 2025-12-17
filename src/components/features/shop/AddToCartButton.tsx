'use client';

import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/types';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state: { addItem: (p: Product) => void }) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`
        flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 w-full
        ${isAdded 
          ? 'bg-[#2D5016] text-white' 
          : 'bg-[#8B4513] text-white hover:bg-[#6F370F] hover:shadow-lg'
        }
      `}
    >
      <ShoppingCart size={20} />
      {isAdded ? '¡Añadido!' : 'Añadir al Carrito'}
    </button>
  );
}
