'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore, CartItem } from '@/store/useCartStore';

export default function CartSummary() {
  const { items, removeItem, getCartTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 w-80">
        <ShoppingBag className="mx-auto mb-4 opacity-50" size={48} />
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-4 bg-[#2D5016] text-white flex justify-between items-center">
        <h3 className="font-bold">Tu Carrito</h3>
        <span className="text-sm bg-[#D4AF37] text-[#2D5016] px-2 py-0.5 rounded-full font-bold">
          {items.length} items
        </span>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {items.map((item: CartItem) => (
          <div key={item.id} className="flex gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-[#2D5016] truncate">{item.title}</h4>
              <p className="text-sm text-gray-500">
                {item.quantity} x ${item.price.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-400 hover:text-red-600 transition-colors p-1"
              aria-label="Eliminar producto"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 font-bold">Total</span>
          <span className="text-2xl font-yeseva text-[#2D5016]">
            ${getCartTotal().toLocaleString()}
          </span>
        </div>
        
        <Link
          href="/shop/cart"
          className="block w-full bg-[#D4AF37] text-[#2D5016] text-center py-3 rounded-lg font-bold hover:bg-[#C5A028] transition-colors"
        >
          Ver Carrito Completo
        </Link>
      </div>
    </div>
  );
}
