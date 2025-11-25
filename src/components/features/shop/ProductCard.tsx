import Image from 'next/image';
import Card from '../../ui/Card';

interface ProductCardProps {
  title: string;
  cupProfile: string;
  tastingNotes: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ProductCard({
  title,
  cupProfile,
  tastingNotes,
  imageUrl,
  imageAlt,
}: ProductCardProps) {
  return (
    <Card className="p-0 m-0 bg-transparent w-[300px] min-h-[600px] flex flex-col">
      {/* Image Container - Top Half */}
      <div className="bg-(--secondary-color) p-8 flex justify-center items-center relative h-[300px] w-full shrink-0">
        <div className="relative w-full h-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
             <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-contain drop-shadow-xl"
             />
        </div>
      </div>

      {/* Description Container - Bottom Half */}
      <div className="bg-(--card-background) p-8 text-(--primary-color) flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-3xl mb-4">{title}</h3>

        {/* Separator */}
        <div className="h-0.5 bg-(--primary-color) w-full mb-4 "></div>

        {/* Cup Profile */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
            PERFIL DE TAZA - CUP PROFILE
          </p>
          <p className="font-(--font-yeseva-one) text-xl tracking-wide">
            {cupProfile}
          </p>
        </div>

        {/* Separator */}
        <div className="h-0.5 bg-(--primary-color) w-full mb-4 opacity-100"></div>

        {/* Tasting Notes */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
            NOTAS DE SABOR - TASTING NOTES
          </p>
          <p className="font-(--font-yeseva-one) text-xl tracking-wide uppercase">
            {tastingNotes}
          </p>
        </div>
      </div>
    </Card>
  );
}
