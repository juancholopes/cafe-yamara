// Componente Estructural

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 ">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Cafe Yamara. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
