import ProductCard from '@/components/features/shop/ProductCard';
import { productsService } from '@/services/products.service';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
	title: 'Tienda',
	description:
		'Compra café de especialidad y productos de Café Yamara. Descubre perfiles de taza, notas de cata y más.',
	alternates: {
		canonical: '/shop',
	},
};

export default async function ShopPage() {
  const products = await productsService.getProducts();

	return (
		<div className="flex items-center justify-center mx-auto w-full flex-1 bg-[#F5F1E8]">
			<div className="flex flex-row flex-wrap justify-center items-center gap-12 p-8">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
        {products.length === 0 && (
          <div className="text-white text-center py-12">
            <p className="text-xl">No hay productos disponibles en este momento.</p>
          </div>
        )}
			</div>
		</div>
	);
}
