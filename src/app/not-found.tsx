import Link from 'next/link';

// Página 404 personalizada
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
      <p className="mb-4">Lo sentimos, no pudimos encontrar el recurso que buscas.</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
