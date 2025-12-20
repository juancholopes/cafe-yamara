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
		<div className="mx-auto w-full flex-1 bg-(--primary-color)">
			<div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
				<div className="flex flex-wrap justify-center items-start gap-8 lg:gap-10">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
        {products.length === 0 && (
          <div className="text-white text-center py-12">
            <p className="text-xl">No hay productos disponibles en este momento.</p>
          </div>
        )}
			</div>
		</div>
	);
}
