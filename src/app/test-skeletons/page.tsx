import Link from "next/link";

export default function TestSkeletonsPage() {
  return (
    <div className="min-h-screen bg-(--primary-color) text-white p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Pruebas de Skeletons</h1>
      <div className="flex gap-4">
        <Link 
            href="/test-skeletons/footer" 
            className="px-6 py-3 bg-(--secondary-color) text-(--primary-color) font-bold rounded hover:opacity-90 transition-opacity"
        >
            Ver Skeleton Footer
        </Link>
        <Link 
            href="/test-skeletons/shop" 
            className="px-6 py-3 bg-(--secondary-color) text-(--primary-color) font-bold rounded hover:opacity-90 transition-opacity"
        >
            Ver Skeleton Shop
        </Link>
        <Link 
            href="/test-skeletons/navbar" 
            className="px-6 py-3 bg-(--secondary-color) text-(--primary-color) font-bold rounded hover:opacity-90 transition-opacity"
        >
            Ver Skeleton Navbar
        </Link>
      </div>
    </div>
  );
}
