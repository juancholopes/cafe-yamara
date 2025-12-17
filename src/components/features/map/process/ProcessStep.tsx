import React from 'react';

interface ProcessStepProps {
  step: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function ProcessStep({ step, title, description, icon, className = '' }: ProcessStepProps) {
  return (
    <div className={`flex flex-col items-center gap-4 p-6 bg-(--card-background) rounded-2xl shadow-lg text-(--primary-color) z-10 relative ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-(--primary-color) text-(--secondary-color)">
        {icon}
      </div>
      <div className="text-center">
        <span className="block text-sm font-bold uppercase tracking-wider mb-1">{step}</span>
        <h3 className="text-2xl font-bold font-yeseva">{title}</h3>
        {description && <p className="mt-2 text-sm opacity-80">{description}</p>}
      </div>
    </div>
  );
}
