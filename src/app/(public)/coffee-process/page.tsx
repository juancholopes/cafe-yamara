import React from 'react';
import ProcessStep from '@/components/features/map/process/ProcessStep';
import { Sun, Flame, Aperture, Coffee, Sprout } from 'lucide-react';

export default function CoffeeProcessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-(--primary-color) py-20 px-4 overflow-hidden">
      <div className="max-w-5xl w-full relative">
        <h1 className="text-5xl md:text-7xl text-(--secondary-color) text-center mb-20 font-yeseva">
          Proceso del Café
        </h1>

        {/* Desktop Layout (Zig-Zag) */}
        <div className="hidden md:grid grid-cols-2 gap-y-16 gap-x-12 relative max-w-4xl mx-auto">
          
          {/* Connecting Lines (SVG Overlay) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 1300" preserveAspectRatio="none">
            {/* Cultivo -> A (Right) */}
            <path d="M 300 150 L 700 150" fill="none" stroke="#a5c684" strokeWidth="3" strokeDasharray="12 12" markerEnd="url(#arrowhead)" />

            {/* A -> B (Down) */}
            <path d="M 750 250 L 750 380" fill="none" stroke="#a5c684" strokeWidth="3" strokeDasharray="12 12" markerEnd="url(#arrowhead)" />
            
            {/* B -> C (Curved Left) */}
            <path d="M 750 580 C 750 680, 250 680, 250 780" fill="none" stroke="#a5c684" strokeWidth="3" strokeDasharray="12 12" markerEnd="url(#arrowhead)" />
            
            {/* C -> D (Curved Right) */}
            <path d="M 250 980 C 250 1080, 750 1080, 750 1180" fill="none" stroke="#a5c684" strokeWidth="3" strokeDasharray="12 12" markerEnd="url(#arrowhead)" />

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#a5c684" />
              </marker>
            </defs>
          </svg>

          {/* Step 0: Cultivo (Left Column) */}
          <div className="col-start-1 row-start-1 flex justify-center items-center">
            <ProcessStep 
              step="0." 
              title="Cultivo" 
              description="El cuidado de los cafetos desde la siembra hasta la cosecha."
              icon={<Sprout size={32} />}
            />
          </div>

          {/* Step A: Secado (Right Column) */}
          <div className="col-start-2 row-start-1 flex justify-center items-center">
            <ProcessStep 
              step="A." 
              title="Secado" 
              description="El café se seca al sol o en máquinas para reducir la humedad."
              icon={<Sun size={32} />}
            />
          </div>

          {/* Step B: Tostado (Right Column) */}
          <div className="col-start-2 row-start-2 flex justify-center items-center">
            <ProcessStep 
              step="B." 
              title="Tostado" 
              description="Los granos verdes se tuestan para desarrollar su aroma y sabor."
              icon={<Flame size={32} />}
            />
          </div>

          {/* Step C: Molido (Left Column) */}
          <div className="col-start-1 row-start-3 flex justify-center items-center">
            <ProcessStep 
              step="C." 
              title="Molido" 
              description="El café tostado se muele al grosor ideal para la preparación."
              icon={<Aperture size={32} />}
            />
          </div>

          {/* Step D: Extracción (Right Column) */}
          <div className="col-start-2 row-start-4 flex justify-center items-center">
            <ProcessStep 
              step="D." 
              title="Extracción" 
              description="El agua caliente extrae los sabores del café molido."
              icon={<Coffee size={32} />}
            />
          </div>

        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden flex flex-col gap-12 relative">
           {/* Vertical Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-(--secondary-color) -translate-x-1/2 z-0 opacity-30 border-l-2 border-dashed border-(--secondary-color)"></div>

          <ProcessStep 
            step="0." 
            title="Cultivo" 
            description="El cuidado de los cafetos desde la siembra hasta la cosecha."
            icon={<Sprout size={32} />}
          />
          <ProcessStep 
            step="A." 
            title="Secado" 
            description="El café se seca al sol o en máquinas para reducir la humedad."
            icon={<Sun size={32} />}
          />
          <ProcessStep 
            step="B." 
            title="Tostado" 
            description="Los granos verdes se tuestan para desarrollar su aroma y sabor."
            icon={<Flame size={32} />}
          />
          <ProcessStep 
            step="C." 
            title="Molido" 
            description="El café tostado se muele al grosor ideal para la preparación."
            icon={<Aperture size={32} />}
          />
          <ProcessStep 
            step="D." 
            title="Extracción" 
            description="El agua caliente extrae los sabores del café molido."
            icon={<Coffee size={32} />}
          />
        </div>

      </div>
    </div>
  );
}
