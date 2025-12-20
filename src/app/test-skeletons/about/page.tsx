import AboutLoading from "@/app/(public)/about/loading";

export default function TestAboutSkeletonPage() {
  return (
    <div className="min-h-screen">
      <div className="p-8 text-white text-center bg-(--primary-color)">
        <h1 className="text-2xl mb-4">Prueba de Skeleton: About</h1>
        <p>Se renderiza el contenido de `loading.tsx` de /about 👇</p>
      </div>
      <AboutLoading />
    </div>
  );
}
