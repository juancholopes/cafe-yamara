// Componente UI Genérico
export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
      <div onClick={() => {}} className={`bg-(--secondary-color) rounded-md text-(--primary-color) shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}>
        {children}
      </div>
    );
}