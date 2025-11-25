export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-(--primary-color)">
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-(--secondary-color) drop-shadow-lg">
            Sobre Nosotros
          </h1>
          
          <div className="bg-(--primary-color)/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              En <span className="font-bold text-(--secondary-color)">Café Yamara</span>, 
              cultivamos con pasión y tradición el mejor café de la región. 
              Cada grano cuenta una historia de dedicación y amor por la tierra.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Desde las montañas hasta tu taza, cuidamos cada paso del proceso 
              para ofrecerte una experiencia única de sabor y aroma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
