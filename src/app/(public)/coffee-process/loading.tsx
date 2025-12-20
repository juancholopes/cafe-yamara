export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-[#F5F1E8] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-pulse">
          <div className="mx-auto h-12 md:h-16 w-80 bg-[#2D5016]/10 rounded-xl" />
          <div className="mx-auto mt-6 h-6 w-md max-w-full bg-[#8B4513]/10 rounded-lg" />
          <div className="mx-auto mt-3 h-6 w-88 max-w-full bg-[#8B4513]/10 rounded-lg" />
        </div>

        {/* Timeline skeleton */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-white/40 p-6 shadow-sm animate-pulse"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#2D5016]/10" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-40 bg-[#2D5016]/10 rounded" />
                  <div className="h-4 w-full bg-black/5 rounded" />
                  <div className="h-4 w-5/6 bg-black/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
