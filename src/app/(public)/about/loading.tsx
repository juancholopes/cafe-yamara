export default function Loading() {
  return (
    <div className="w-full bg-[#FDFBF7] text-[#4A3B32] overflow-hidden font-sans">
      {/* HERO */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#1D2F1D]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-[#FDFBF7] w-full">
          <div className="mx-auto h-14 md:h-20 w-3/4 bg-white/10 rounded-xl animate-pulse" />
          <div className="mx-auto mt-6 h-6 md:h-8 w-2/3 bg-white/10 rounded-lg animate-pulse" />
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="h-4 w-40 bg-[#C6A87C]/30 rounded animate-pulse" />
            <div className="h-10 md:h-12 w-4/5 bg-[#1D2F1D]/10 rounded-lg animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-black/5 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-black/5 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-black/5 rounded animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-black/5 rounded animate-pulse" />
              <div className="h-4 w-10/12 bg-black/5 rounded animate-pulse" />
              <div className="h-4 w-3/5 bg-black/5 rounded animate-pulse" />
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[#C6A87C]/30 transform rotate-6 scale-105 opacity-60" />
              <div className="absolute inset-0 rounded-full bg-black/5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="py-20 px-6 bg-[#E8EDE3]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/60 border border-[#C6A87C]/20 p-10 rounded-xl animate-pulse">
              <div className="w-16 h-16 bg-[#1D2F1D]/20 rounded-full mb-6" />
              <div className="h-8 w-2/3 bg-[#1D2F1D]/10 rounded mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-black/5 rounded" />
                <div className="h-4 w-11/12 bg-black/5 rounded" />
                <div className="h-4 w-4/5 bg-black/5 rounded" />
              </div>
            </div>

            <div className="bg-[#1D2F1D] p-10 rounded-xl animate-pulse">
              <div className="w-16 h-16 bg-[#C6A87C]/30 rounded-full mb-6" />
              <div className="h-8 w-2/3 bg-white/10 rounded mb-4" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-white/10 rounded" />
                <div className="h-4 w-11/12 bg-white/10 rounded" />
                <div className="h-4 w-4/5 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-24 px-6 bg-[#1D2F1D] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mx-auto h-10 md:h-12 w-72 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-24 h-1 bg-[#C6A87C]/30 mx-auto mt-4 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-xl border border-white/10 animate-pulse"
              >
                <div className="h-12 w-12 bg-[#C6A87C]/30 rounded-lg mb-6" />
                <div className="h-6 w-2/3 bg-white/10 rounded mb-3" />
                <div className="h-4 w-full bg-white/10 rounded mb-2" />
                <div className="h-4 w-5/6 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO (resumen) */}
      <section className="py-24 px-6 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto h-10 md:h-12 w-80 bg-[#1D2F1D]/10 rounded-lg animate-pulse" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col items-center text-center animate-pulse">
                <div className="w-28 h-28 bg-[#C6A87C]/20 rounded-full mb-6" />
                <div className="h-6 w-32 bg-[#1D2F1D]/10 rounded mb-2" />
                <div className="h-4 w-40 bg-black/5 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / EXTRAS */}
      <section className="py-20 px-6 bg-[#E8EDE3]/20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center px-4 animate-pulse">
            <div className="mx-auto h-8 md:h-10 w-4/5 bg-black/5 rounded-lg" />
            <div className="mx-auto mt-4 h-4 w-40 bg-[#C6A87C]/30 rounded" />
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#1D2F1D] animate-pulse">
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/10 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="h-12 w-56 bg-[#1D2F1D]/10 rounded-full" />
            <div className="h-12 w-64 bg-[#C6A87C]/20 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
