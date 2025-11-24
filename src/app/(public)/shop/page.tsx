import ProductCard from '@/src/components/features/shop/ProductCard';

// Datos falsos para probar el componente (Mock Data)
const MOCK_PRODUCTS = [
	{
		id: 1,
		title: 'Premium',
		cupProfile: 'FUERTE - STRONG',
		tastingNotes: 'CHOCOLATE - CITRIC - FRUITS',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Premium Yamara',
	},
	{
		id: 2,
		title: 'Balanceado',
		cupProfile: 'SUAVE - MILD',
		tastingNotes: 'CARAMEL - NUTS - VANILLA',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Balanceado Yamara',
	},
	{
		id: 3,
		title: 'Exótico',
		cupProfile: 'FLORAL - DELICATE',
		tastingNotes: 'JASMINE - BERRIES - HONEY',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Exótico Yamara',
	},
];

export default function ShopPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-serif text-(--primary-color) mb-8 text-center">
				Nuestros Cafés
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{MOCK_PRODUCTS.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						cupProfile={product.cupProfile}
						tastingNotes={product.tastingNotes}
						imageUrl={product.imageUrl}
						imageAlt={product.imageAlt}
					/>
				))}
			</div>
		</div>
	);
}
