import { Welcome } from '@/components/ui/Welcome';

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto w-full h-screen bg-(--primary-color)">
      <Welcome />
    </div>
  );
}
