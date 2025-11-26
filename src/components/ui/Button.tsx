// Componente UI Genérico
export default function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="bg-(--primary-color) text-(--secondary-color) py-6 px-8 rounded-2xl hover:bg-(--secondary-color) transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-(--primary-color) text-2xl "
      >
        {children}
      </button>
    );
}