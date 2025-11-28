
import Button from "@/src/components/ui/Button";


export default function AboutPage() {
  return (
    <section className="mx-0 p-0 flex flex-row items-center justify-center bg-(--primary-color)">
      {/* Contenido */}
      <div className=" flex flex-col items-center justify-center min-h-screen p-6 bg-(--primary-color) w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-(--secondary-color) drop-shadow-lg">Sobre nosotros</h1>
        {/* <Button >Conócenos</Button> */}
      </div>
    </section>
  );
}
