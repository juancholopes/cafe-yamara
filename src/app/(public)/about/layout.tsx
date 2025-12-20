import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce Café Yamara: nuestra historia, misión, visión y compromiso con un café sostenible de especialidad.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
