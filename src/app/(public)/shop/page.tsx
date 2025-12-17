import ProductCard from '@/components/features/shop/ProductCard';
import { productsService } from '@/services/products.service';

export const dynamic = 'force-dynamic';

export default async function ShopPage() {
  const products = await productsService.getProducts();

	return (
		<div className="flex items-center justify-center mx-auto w-full flex-1 bg-(--primary-color)">
			<div className="flex flex-row flex-wrap justify-center items-center gap-12 p-8">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						cupProfile={product.cup_profile}
						tastingNotes={product.tasting_notes}
						imageUrl={product.image_url}
						imageAlt={product.title}
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
