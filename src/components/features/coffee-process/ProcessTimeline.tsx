'use client';

import * as Icons from 'lucide-react';
import type { PreparationStep } from '@/types';

interface Props {
  steps: PreparationStep[];
}

export default function ProcessTimeline({ steps }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="relative">
        {/* Desktop Central Line - Removed global line, using per-step lines */}
        
        <div className="flex flex-col gap-8 md:gap-0">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            
            // Dynamic Icon with fallback
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (step.icon_name && (Icons as any)[step.icon_name]) 
              || Icons.Coffee;

            return (
              <div 
                key={step.id} 
                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Desktop Connector Line Segments */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#2D5016] -z-10"
                  style={{
                    top: isFirst ? '50%' : '0',
                    bottom: isLast ? '50%' : '0'
                  }}
                />

                {/* Spacer for Desktop Alignment */}
                <div className="hidden md:block flex-1" />

                {/* Central Icon */}
                <div className="relative z-10 flex-none mx-4 md:mx-8">
                  <div className="w-20 h-20 rounded-full bg-[#2D5016] flex items-center justify-center shadow-lg border-4 border-[#F5F1E8] relative z-20">
                    <IconComponent className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  
                  {/* Mobile Connector Line (Icon to Card) */}
                  <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#2D5016]" />
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full md:w-auto pt-8 md:pt-16 md:pb-16">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#F5F1E8] relative group mx-auto md:mx-0 max-w-md ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    
                    {/* Desktop Horizontal Connector */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#2D5016] ${isEven ? '-left-8' : '-right-8'}`} />

                    {/* Badge */}
                    <div className="absolute -top-4 left-8 bg-[#8B4513] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Paso {step.step_number}
                    </div>

                    <h3 className="font-yeseva text-3xl text-[#2D5016] mb-4 mt-2">
                      {step.title}
                    </h3>
                    
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connector Line (Card to Next Icon) */}
                  {!isLast && (
                    <div className="md:hidden w-0.5 h-8 bg-[#2D5016] mx-auto mt-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
