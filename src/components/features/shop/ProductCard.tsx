"use client";

import Image from 'next/image';
import Card from '../../ui/Card';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, cup_profile, tasting_notes, image_url, price } = product;

  return (
    <Card className="p-0 m-0 bg-transparent w-[300px] min-h-[700px] flex flex-col">
      {/* Image Container - Top Half */}
      <div className="bg-[#D4AF37] p-8 flex justify-center items-center relative h-[300px] w-full shrink-0">
        <motion.div 
          className="relative w-full h-full shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
             <Image
                src={image_url}
                alt={title}
                fill
                className="object-contain drop-shadow-xl"
             />
        </motion.div>
      </div>

      {/* Description Container - Bottom Half */}
      <div className="bg-[#F5F1E8] p-8 text-[#2D5016] flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-3xl mb-4 font-yeseva">{title}</h3>

        {/* Separator */}
        <div className="h-0.5 bg-[#2D5016] w-full mb-4 "></div>

        {/* Cup Profile */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
            PERFIL DE TAZA - CUP PROFILE
          </p>
          <p className="font-yeseva text-xl tracking-wide">
            {cup_profile}
          </p>
        </div>

        {/* Separator */}
        <div className="h-0.5 bg-[#2D5016] w-full mb-4 opacity-100"></div>

        {/* Tasting Notes */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
            NOTAS DE SABOR - TASTING NOTES
          </p>
          <p className="font-yeseva text-xl tracking-wide uppercase">
            {tasting_notes}
          </p>
        </div>

        {/* Price and Action */}
        <div className="mt-auto">
          <div className="flex justify-between items-end mb-4">
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">PRECIO</span>
            <span className="font-yeseva text-3xl">${price.toLocaleString()}</span>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </Card>
  );
}
