export default function ProductCardSkeleton() {
  return (
    <div className="w-full max-w-[380px]">
      <div className="rounded-3xl bg-(--secondary-color) p-5">
        <div className="rounded-[28px] overflow-hidden bg-white/10 animate-pulse flex flex-col">
          {/* Image */}
          <div className="bg-white/5 px-8 pt-10">
            <div className="h-[380px] w-full bg-white/10 rounded-t-[28px]" />
          </div>

          {/* Content */}
          <div className="bg-white/10 w-full">
            <div className="px-8 pt-6 pb-8 flex flex-col gap-4">
              <div className="h-9 w-3/4 bg-white/20 rounded" />
              <div className="h-px w-full bg-white/20" />

              <div className="space-y-2">
                <div className="h-3 w-40 bg-white/20 rounded" />
                <div className="h-5 w-44 bg-white/20 rounded" />
              </div>

              <div className="h-px w-full bg-white/20" />

              <div className="space-y-2">
                <div className="h-3 w-52 bg-white/20 rounded" />
                <div className="h-5 w-56 bg-white/20 rounded" />
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-end justify-between gap-4">
                  <div className="h-4 w-20 bg-white/20 rounded" />
                  <div className="h-8 w-24 bg-white/20 rounded" />
                </div>
                <div className="h-12 w-full bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
