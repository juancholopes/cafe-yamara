export default function FooterSkeleton() {
  return (
    <footer className="bg-(--primary-color) border-t border-white/10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* Columna 1 */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-64 bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-56 bg-white/10 rounded animate-pulse" />
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="h-7 w-32 bg-white/10 rounded animate-pulse" />
            <div className="flex flex-col gap-3 w-full items-center md:items-start">
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
            </div>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="h-7 w-32 bg-white/10 rounded animate-pulse" />
            <div className="flex flex-col gap-3 w-full items-center md:items-start">
                <div className="h-4 w-40 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-40 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-40 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8">
            <div className="h-7 w-7 bg-white/10 rounded-full animate-pulse" />
            <div className="h-7 w-7 bg-white/10 rounded-full animate-pulse" />
            <div className="h-7 w-7 bg-white/10 rounded-full animate-pulse" />
          </div>
          <div className="h-4 w-64 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      
      {/* Marquee Skeleton */}
      <div className="w-full h-14 bg-[#a5c684]/20 animate-pulse" />
    </footer>
  )
}
