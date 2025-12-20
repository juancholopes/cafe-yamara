import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

export default function TestShopSkeletonPage() {
  return (
    <div className="min-h-screen bg-(--primary-color)">
        <div className="p-8 text-white text-center">
            <h1 className="text-2xl mb-4">Prueba de Skeleton: Shop (Product Cards)</h1>
            <p>Se muestran 10 tarjetas de skeleton 👇</p>
        </div>
      <div className="mx-auto w-full flex-1">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div className="flex flex-wrap justify-center items-start gap-10 lg:gap-12">
            {[...Array(9)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
