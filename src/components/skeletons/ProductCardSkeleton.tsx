export default function ProductCardSkeleton() {
  return (
    <div className="w-[300px] min-h-[650px] flex flex-col">
      {/* Image Container Skeleton */}
      <div className="bg-white/5 h-[300px] w-full shrink-0 animate-pulse flex items-center justify-center">
         <div className="w-40 h-56 bg-white/10 rounded-md" />
      </div>

      {/* Description Container Skeleton */}
      <div className="bg-white/10 p-8 flex-1 flex flex-col animate-pulse">
        {/* Title */}
        <div className="h-9 w-3/4 bg-white/20 rounded mb-4" />

        {/* Separator */}
        <div className="h-0.5 bg-white/20 w-full mb-4" />

        {/* Cup Profile */}
        <div className="mb-6 space-y-2">
          <div className="h-3 w-24 bg-white/20 rounded" />
          <div className="h-5 w-40 bg-white/20 rounded" />
        </div>

        {/* Tasting Notes */}
        <div className="mb-6 space-y-2">
          <div className="h-3 w-24 bg-white/20 rounded" />
          <div className="h-5 w-56 bg-white/20 rounded" />
        </div>
      </div>
    </div>
  )
}
