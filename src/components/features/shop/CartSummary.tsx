'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore, CartItem } from '@/store/useCartStore';

export default function CartSummary() {
  const { items, removeItem, getCartTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="w-80 max-w-[calc(100vw-2rem)] bg-(--card-background) rounded-2xl shadow-lg border border-(--primary-color)/10 overflow-hidden">
        <div className="p-6 text-center text-(--primary-color)">
          <ShoppingBag className="mx-auto mb-4 opacity-40" size={48} />
          <p className="font-bold">Tu carrito está vacío</p>
          <p className="mt-1 text-sm opacity-80">Agrega productos para comenzar.</p>
        </div>
        <div className="p-4 bg-white/30">
          <Link
            href="/shop"
            className="block w-full bg-(--secondary-color) text-(--primary-color) text-center py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity"
          >
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-96 max-w-[calc(100vw-2rem)] bg-(--card-background) rounded-2xl shadow-lg border border-(--primary-color)/10 overflow-hidden">
      <div className="p-4 bg-(--primary-color) text-(--text-color) flex justify-between items-center">
        <h3 className="font-bold">Tu carrito</h3>
        <span className="text-sm bg-(--secondary-color) text-(--primary-color) px-2 py-0.5 rounded-full font-bold">
          {items.length} items
        </span>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {items.map((item: CartItem) => (
          <div key={item.id} className="flex gap-4 p-4 border-b border-(--primary-color)/10 hover:bg-white/30 transition-colors">
            <div className="relative w-16 h-16 shrink-0 bg-white/30 rounded-xl overflow-hidden">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-(--primary-color) truncate">{item.title}</h4>
              <p className="text-sm text-(--primary-color) opacity-80">
                {item.quantity} x ${item.price.toLocaleString('es-CO')}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600/70 hover:text-red-600 transition-colors p-1"
              aria-label="Eliminar producto"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white/30">
        <div className="flex justify-between items-center mb-4">
          <span className="text-(--primary-color) font-bold">Total</span>
          <span className="text-2xl font-yeseva text-(--primary-color)">
            ${getCartTotal().toLocaleString('es-CO')}
          </span>
        </div>
        
        <Link
          href="/shop/cart"
          className="block w-full bg-(--secondary-color) text-(--primary-color) text-center py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity"
        >
          Ver Carrito Completo
        </Link>
      </div>
    </div>
  );
}
