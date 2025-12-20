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
    <Card className="w-full max-w-[380px] rounded-3xl bg-(--secondary-color) p-5 shadow-none hover:shadow-none">
      <div className="rounded-[28px] overflow-hidden text-(--primary-color) flex flex-col">
        {/* Image */}
        <div className="bg-white px-8 pt-10">
          <motion.div
            className="relative h-[380px] w-full overflow-hidden rounded-t-[28px] flex items-end"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={image_url}
              alt={title}
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-bottom"
              priority={false}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="bg-(--card-background) w-full">
          <div className="px-8 pt-6 pb-8 flex flex-col">
            <h3 className="text-4xl font-yeseva leading-tight">{title}</h3>

            <div className="mt-4 h-px w-full bg-(--primary-color) opacity-40" />

            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                PERFIL DE TAZA - CUP PROFILE
              </p>
              <p className="mt-1 font-yeseva text-xl tracking-wide">{cup_profile}</p>
            </div>

            <div className="mt-4 h-px w-full bg-(--primary-color) opacity-40" />

            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                NOTAS DE SABOR - TASTING NOTES
              </p>
              <p className="mt-1 font-yeseva text-xl tracking-wide uppercase">{tasting_notes}</p>
            </div>

            {/* Price and Action */}
            <div className="pt-6">
              <div className="flex items-end justify-between gap-4">
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">PRECIO</span>
                <span className="font-yeseva text-3xl leading-none">${price.toLocaleString()}</span>
              </div>
              <div className="mt-5">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
