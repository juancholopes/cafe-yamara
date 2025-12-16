export default function NavbarSkeleton() {
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <nav className="bg-(--primary-color) shadow-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Skeleton */}
                        <div className="shrink-0">
                             <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
                        </div>

                        {/* Desktop Navigation Skeleton */}
                        <div className="hidden lg:flex items-center justify-center gap-8">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-4 w-20 bg-white/10 rounded animate-pulse" />
                            ))}
                        </div>

                        {/* Desktop Actions Skeleton */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="h-10 w-10 bg-white/10 rounded animate-pulse" />
                            <div className="h-10 w-10 bg-white/10 rounded animate-pulse" />
                        </div>

                        {/* Mobile Menu Button Skeleton */}
                        <div className="lg:hidden flex items-center">
                            <div className="h-10 w-10 bg-white/10 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
