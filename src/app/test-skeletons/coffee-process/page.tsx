import CoffeeProcessLoading from "@/app/(public)/coffee-process/loading";

export default function TestCoffeeProcessSkeletonPage() {
  return (
    <div className="min-h-screen">
      <div className="p-8 text-white text-center bg-(--primary-color)">
        <h1 className="text-2xl mb-4">Prueba de Skeleton: Coffee Process</h1>
        <p>Se renderiza el contenido de `loading.tsx` de /coffee-process 👇</p>
      </div>
      <CoffeeProcessLoading />
    </div>
  );
}
