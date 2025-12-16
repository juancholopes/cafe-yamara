import { Hero } from '@/components/features/home/Hero';

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto w-full h-screen bg-(--primary-color)">
      <Hero />
    </div>
  );
}
