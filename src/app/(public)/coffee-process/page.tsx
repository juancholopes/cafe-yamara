import React from 'react';
import ProcessTimeline from '@/components/features/coffee-process/ProcessTimeline';
import type { PreparationStep } from '@/types';

const steps: PreparationStep[] = [
  {
    id: 1,
    step_number: 1,
    title: "Cultivo",
    description: "El cuidado de los cafetos desde la siembra hasta la cosecha.",
    icon_name: "Sprout"
  },
  {
    id: 2,
    step_number: 2,
    title: "Secado",
    description: "El café se seca al sol o en máquinas para reducir la humedad.",
    icon_name: "Sun"
  },
  {
    id: 3,
    step_number: 3,
    title: "Tostado",
    description: "Los granos verdes se tuestan para desarrollar su aroma y sabor.",
    icon_name: "Flame"
  },
  {
    id: 4,
    step_number: 4,
    title: "Molienda",
    description: "El café tostado se muele al grosor ideal para la preparación.",
    icon_name: "Wheat"
  },
  {
    id: 5,
    step_number: 5,
    title: "Extracción",
    description: "El agua caliente extrae los sabores del café molido.",
    icon_name: "Coffee"
  }
];

export default function CoffeeProcessPage() {
  return (
    <div className="min-h-screen w-full bg-[#F5F1E8] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-[#2D5016] font-yeseva mb-6">
            Del Grano a la Taza
          </h1>
          <p className="text-xl text-[#8B4513] max-w-2xl mx-auto font-sans">
            Descubre el proceso artesanal que hace único a nuestro café, 
            cuidando cada detalle desde el cultivo hasta tu mesa.
          </p>
        </div>

        <ProcessTimeline steps={steps} />
      </div>
    </div>
  );
}
