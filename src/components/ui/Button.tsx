// Componente UI Genérico
export default function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="bg-(--primary-color) text-white py-2 px-4 rounded hover:bg-(--secondary-color) transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
      >
        {children}
      </button>
    );
}