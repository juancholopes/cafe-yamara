import FooterSkeleton from "@/components/skeletons/FooterSkeleton";

export default function TestFooterSkeletonPage() {
  return (
    <div className="min-h-screen bg-(--primary-color) flex flex-col justify-end">
        <div className="p-8 text-white text-center">
            <h1 className="text-2xl mb-4">Prueba de Skeleton: Footer</h1>
            <p>El skeleton se muestra abajo 👇</p>
        </div>
      <FooterSkeleton />
    </div>
  );
}
