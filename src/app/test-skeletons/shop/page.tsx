import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

export default function TestShopSkeletonPage() {
  return (
    <div className="min-h-screen bg-(--primary-color)">
        <div className="p-8 text-white text-center">
            <h1 className="text-2xl mb-4">Prueba de Skeleton: Shop (Product Cards)</h1>
            <p>Se muestran 10 tarjetas de skeleton 👇</p>
        </div>
      <div className="flex items-center justify-center mx-auto w-full flex-1">
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-8">
          {[...Array(10)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
