import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

export default function Loading() {
  return (
    <div className="flex items-center justify-center mx-auto w-full flex-1 bg-(--primary-color)">
      <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-8">
        {[...Array(10)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
