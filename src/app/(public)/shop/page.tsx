import ProductCard from '@/components/features/shop/ProductCard';

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
	{
		id: 4,
		title: 'Intenso',
		cupProfile: 'INTENSO - BOLD',
		tastingNotes: 'DARK CHOCOLATE - SPICES - ROASTED',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Intenso Yamara',
	},
	{
		id: 5,
		title: 'Clásico',
		cupProfile: 'MEDIO - MEDIUM',
		tastingNotes: 'COCOA - BROWN SUGAR - ALMOND',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Clásico Yamara',
	},
	{
		id: 6,
		title: 'Frutal',
		cupProfile: 'BRILLANTE - BRIGHT',
		tastingNotes: 'TROPICAL FRUITS - CITRUS - SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Frutal Yamara',
	},
	{
		id: 7,
		title: 'Oscuro',
		cupProfile: 'MUY FUERTE - VERY STRONG',
		tastingNotes: 'BITTER CHOCOLATE - SMOKY - EARTHY',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Oscuro Yamara',
	},
	{
		id: 8,
		title: 'Suave',
		cupProfile: 'MUY SUAVE - VERY MILD',
		tastingNotes: 'MILK CHOCOLATE - CREAMY - SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Suave Yamara',
	},
	{
		id: 9,
		title: 'Especial',
		cupProfile: 'EQUILIBRADO - BALANCED',
		tastingNotes: 'NUTS - CARAMEL - HINT OF FRUIT',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Especial Yamara',
	},
	{
		id: 10,
		title: 'Orgánico',
		cupProfile: 'NATURAL - ORGANIC',
		tastingNotes: 'EARTHY - NUTTY - SLIGHTLY SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Orgánico Yamara',
	},
	{
		id: 11,
		title: 'Descafeinado',
		cupProfile: 'SUAVE - MILD',
		tastingNotes: 'VANILLA - CARAMEL - SUBTLE',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Descafeinado Yamara',
	},
	{
		id: 12,
		title: 'Arábica',
		cupProfile: 'CLÁSICO - CLASSIC',
		tastingNotes: 'BRIGHT - CITRUS - CLEAN',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Arábica Yamara',
	},
	{
		id: 13,
		title: 'Robusta',
		cupProfile: 'FUERTE - STRONG',
		tastingNotes: 'BITTER - CHOCOLATE - ROASTED',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Robusta Yamara',
	},
	{
		id: 14,
		title: 'Blend',
		cupProfile: 'EQUILIBRADO - BALANCED',
		tastingNotes: 'CHOCOLATE - FRUIT - SPICES',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Blend Yamara',
	},
	{
		id: 15,
		title: 'Colombiano',
		cupProfile: 'MEDIO - MEDIUM',
		tastingNotes: 'CARAMEL - NUTS - SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Colombiano Yamara',
	},
	{
		id: 16,
		title: 'Etiopía',
		cupProfile: 'FLORAL - DELICATE',
		tastingNotes: 'JASMINE - BERRIES - CITRUS',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Etiopía Yamara',
	},
	{
		id: 17,
		title: 'Brasil',
		cupProfile: 'SUAVE - MILD',
		tastingNotes: 'NUTS - CHOCOLATE - LOW ACIDITY',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Brasil Yamara',
	},
	{
		id: 18,
		title: 'Vietnam',
		cupProfile: 'INTENSO - BOLD',
		tastingNotes: 'DARK ROAST - SPICES - BITTER',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Vietnam Yamara',
	},
	{
		id: 19,
		title: 'Guatemala',
		cupProfile: 'BRILLANTE - BRIGHT',
		tastingNotes: 'CITRUS - CHOCOLATE - SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Guatemala Yamara',
	},
	{
		id: 20,
		title: 'Costa Rica',
		cupProfile: 'EQUILIBRADO - BALANCED',
		tastingNotes: 'CARAMEL - FRUIT - CLEAN',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Costa Rica Yamara',
	},
	{
		id: 21,
		title: 'Jamaica',
		cupProfile: 'FLORAL - DELICATE',
		tastingNotes: 'BLUEBERRY - CHOCOLATE - SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Jamaica Yamara',
	},
	{
		id: 22,
		title: 'Hawaii',
		cupProfile: 'SUAVE - MILD',
		tastingNotes: 'NUTS - VANILLA - CREAMY',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Hawaii Yamara',
	},
	{
		id: 23,
		title: 'Kenya',
		cupProfile: 'BRILLANTE - BRIGHT',
		tastingNotes: 'BLACK CURRANT - WINE - CITRUS',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Kenya Yamara',
	},
	{
		id: 24,
		title: 'Indonesia',
		cupProfile: 'EARTHY - FULL',
		tastingNotes: 'EARTH - SPICES - LOW ACIDITY',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Indonesia Yamara',
	},
	{
		id: 25,
		title: 'México',
		cupProfile: 'MEDIO - MEDIUM',
		tastingNotes: 'CHOCOLATE - NUTS - BALANCED',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café México Yamara',
	},
	{
		id: 26,
		title: 'Perú',
		cupProfile: 'SUAVE - MILD',
		tastingNotes: 'CARAMEL - FRUIT - SWEET',
		imageUrl: '/coffee-bag.svg',
		imageAlt: 'Café Perú Yamara',
	},
];

export default function ShopPage() {
	return (
		<div className="flex items-center justify-center mx-auto w-full flex-1 bg-(--primary-color)">
			<div className="flex flex-row flex-wrap justify-center items-center gap-12 p-8">
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
