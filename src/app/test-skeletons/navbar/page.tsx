import NavbarSkeleton from "@/components/skeletons/NavbarSkeleton";

export default function TestNavbarSkeletonPage() {
  return (
    <div className="min-h-screen bg-(--primary-color)">
        <div className="pt-32 p-8 text-white text-center">
            <h1 className="text-2xl mb-4">Prueba de Skeleton: Navbar</h1>
            <p>El skeleton está fijado en la parte superior 👆</p>
        </div>
      <NavbarSkeleton />
    </div>
  );
}
