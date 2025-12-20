'use client';

import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/types';
import { useState } from 'react';
import Button from '@/components/ui/Button';

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
    <Button
      onClick={handleAddToCart}
      disabled={isAdded}
      variant={isAdded ? 'secondary' : 'primary'}
      className="w-full rounded-full py-4 text-lg flex items-center justify-center gap-2"
      aria-live="polite"
    >
      <ShoppingCart size={20} />
      {isAdded ? '¡Añadido!' : 'Añadir al Carrito'}
    </Button>
  );
}
