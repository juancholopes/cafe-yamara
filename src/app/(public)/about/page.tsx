import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-(--primary-color)">
      {/* title */}
      <div className=" flex flex-col items-center justify-center min-h-screen p-12 bg-(--primary-color) w-full gap-8">
        <h1 className="text-5xl  font-bold text-(--secondary-color) drop-shadow-lg text-wrap text-center">
          La escencia de la montaña
        </h1>
        <h4>Un café cultivado sosteniblemente en las montañas de Santander</h4>
        <Button
          className="border-2 border-(--secondary-color)"
          variant="primary"
        >
          Descubre más
        </Button>
      </div>

      {/* content */}
      <div className="w-full min-h-screen bg-(--secondary-color) text-(--primary-color) flex items-center justify-center p-8 sm:p-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Nuestra historia
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-pretty">
              En el corazón de Guadalupe, Santander, nace Café Yamara. La Finca
              Miraflores no es solo un lugar de cultivo, es un ecosistema donde
              la tradición cafetera se encuentra con la sostenibilidad moderna.
              Nuestra filosofía se basa en el respeto por la tierra y el tiempo.
              Cada grano es seleccionado a mano (picking selectivo) asegurando
              que solo los frutos en su punto óptimo de maduración lleguen a tu
              taza.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/coffe-head.webp"
              alt="Cabeza de café"
              width={800}
              height={800}
              className="w-full max-w-2xl rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
