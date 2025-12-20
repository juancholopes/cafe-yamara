import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrito',
  description: 'Revisa tu carrito y finaliza tu compra en Café Yamara.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/shop/cart',
  },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
