import Link from 'next/link';
import Image from 'next/image';
import { productsService } from '@/services/products.service';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await productsService.getProducts();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-(--primary-color)">Gestión de Productos</h1>
        <Link href="/admin/products/create">
          <Button variant="primary">
            + Nuevo Producto
          </Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-(--secondary-color) text-(--primary-color)">
                <th className="p-4 font-bold">Imagen</th>
                <th className="p-4 font-bold">Nombre</th>
                <th className="p-4 font-bold">Precio</th>
                <th className="p-4 font-bold">Stock</th>
                <th className="p-4 font-bold">Categoría</th>
                <th className="p-4 font-bold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={product.image_url}
                        alt={product.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </td>
                  <td className="p-4 font-medium text-gray-900">{product.title}</td>
                  <td className="p-4 text-gray-600">${Number(product.price).toFixed(2)}</td>
                  <td className="p-4 text-gray-600">{product.stock}</td>
                  <td className="p-4 text-gray-600 capitalize">{product.category}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/products/edit/${product.id}`}>
                        <Button variant="outline" className="text-xs px-3 py-1">
                          Editar
                        </Button>
                      </Link>
                      {/* TODO: Implement Delete Button Component */}
                      <Button variant="outline" className="text-xs px-3 py-1 text-red-600 border-red-200 hover:bg-red-50">
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No hay productos registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
