'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { productsService } from '@/services/products.service';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function CreateProductPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    cup_profile: '',
    tasting_notes: '',
    description: '',
    price: '',
    stock: '',
    category: 'coffee'
  });

  const validateWordCount = (text: string, maxWords: number) => {
    const words = text.trim().split(/\s+/);
    return words.length <= maxWords;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Word count validation
    if (name === 'title' && !validateWordCount(value, 10)) return;
    if (name === 'cup_profile' && !validateWordCount(value, 5)) return;
    if (name === 'tasting_notes' && !validateWordCount(value, 10)) return;
    if (name === 'description' && !validateWordCount(value, 50)) return;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!imageFile) {
        throw new Error('Por favor selecciona una imagen');
      }

      // 1. Upload Image
      const imageUrl = await productsService.uploadProductImage(imageFile);

      // 2. Create Product
      await productsService.createProduct({
        title: formData.title,
        cup_profile: formData.cup_profile,
        tasting_notes: formData.tasting_notes,
        description: formData.description,
        price: Number(formData.price),
        stock: Number(formData.stock),
        category: formData.category,
        image_url: imageUrl
      });

      router.push('/admin/products');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Error al crear el producto');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-(--primary-color)">Crear Nuevo Producto</h1>
      
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <Input
            label="Nombre del Producto (Máx 10 palabras)"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Ej: Café Especial Yamara"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Perfil de Taza (Máx 5 palabras)"
              name="cup_profile"
              value={formData.cup_profile}
              onChange={handleChange}
              required
              placeholder="Ej: FUERTE - STRONG"
            />
            
            <Input
              label="Notas de Cata (Máx 10 palabras)"
              name="tasting_notes"
              value={formData.tasting_notes}
              onChange={handleChange}
              required
              placeholder="Ej: CHOCOLATE - CITRIC"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Descripción (Máx 50 palabras)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              rows={4}
              placeholder="Descripción detallada del producto..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Precio"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
            />
            
            <Input
              label="Stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
            />

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Categoría</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-color) h-[42px]"
              >
                <option value="coffee">Café</option>
                <option value="accessories">Accesorios</option>
                <option value="merch">Merch</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Imagen del Producto</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
            />
            <p className="text-xs text-gray-500">Formatos permitidos: JPG, PNG, WEBP</p>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Creando...' : 'Crear Producto'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
