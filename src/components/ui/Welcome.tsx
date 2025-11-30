
import Button from '@/components/ui/Button';

export const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full px-4 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold text-(--secondary-color) drop-shadow-lg font-yeseva">
          Café Yamara
        </h1>
        <p className="text-xl md:text-2xl text-(--secondary-color)/90 max-w-2xl mx-auto font-light">
          Sabor auténtico de nuestras montañas a tu taza
        </p>
      </div>
      
      <div className="flex gap-4">
        <Button>
          Ver Productos
        </Button>
        <Button >
          Nuestra Historia
        </Button>
      </div>
    </section>
  );
};
