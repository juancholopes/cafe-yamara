import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full flex-1 bg-(--primary-color)">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-10">
          {[...Array(9)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
