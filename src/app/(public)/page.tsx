import { Hero } from '@/components/features/home/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Café de especialidad en Colombia',
  description:
    'Café Yamara: café de especialidad de Colombia. Conoce nuestra historia y compra café artesanal en línea.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto w-full h-screen bg-(--primary-color)">
      <Hero />
    </div>
  );
}
