import { motion } from 'motion/react';
import MarqueeCarousel from '../components/MarqueeCarousel';

const bolos = {
  tipos: [
    { name: "Pasta Americana", price: "R$ 180,00", unit: "kg" },
    { name: "Chantininho", price: "R$ 130,00", unit: "kg" },
    { name: "Bolo de Copa (Corte)", price: "R$ 75,00", unit: "kg" },
    { name: "Bolo Fake Decorado", price: "R$ 180,00", unit: "unidade" },
  ],
  massas: ["Baunilha", "Chocolate", "Red Velvet (+ R$ 15,00 no kg)"],
  recheios: [
    "Beijinho", "Estrogonofe de Nozes", "Brigadeiro Branco", "Doce de Leite Côco", 
    "Brigadeiro Tradicional", "Ninho", "Meio Amargo", "4 Leites", 
    "Abacaxi com/sem Côco", "Doce de Leite"
  ],
  images: [
    "/1.png",
    "/2.png",
    "/3.png",
    "https://images.unsplash.com/photo-1578985543813-2dfb399c302b?q=80&w=800",
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800",
    "https://images.unsplash.com/photo-1535254973040-607b474cb8c9?q=80&w=800"
  ]
};

export default function BolosTab() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 pt-24 pb-32"
    >
      <h2 className="text-3xl font-elegant italic text-center mb-4 underline decoration-rose-light underline-offset-8">Bolos de Luxo</h2>
      
      {/* Featured Marquee Carousel at the top */}
      <div className="w-full mb-6">
        <MarqueeCarousel images={bolos.images} className="py-2" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bolos.tipos.map(t => (
              <div key={t.name} className="p-6 bg-white border border-rose-light rounded-2xl shadow-sm">
                <h4 className="font-georgia font-bold text-[20px] leading-[31px] mb-1">{t.name}</h4>
                <p className="text-[#7d5550] font-medium italic">a partir de {t.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-light">
            <h3 className="text-[22px] font-georgia font-bold mb-6 border-b border-rose-light pb-4">Nossas Massas</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
               {bolos.massas.map(m => <li key={m} className="flex items-center gap-2 font-georgia text-[17px] leading-[28px]">• {m}</li>)}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-light">
            <h3 className="text-[22px] font-georgia font-bold mb-6 border-b border-rose-light pb-4">Recheios Especialmente Selecionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-gray-600">
               {bolos.recheios.map(r => <span key={r} className="font-georgia text-[17px] leading-[28px]">• {r}</span>)}
            </div>
            <p className="mt-10 text-xs italic text-rose-dark font-medium border-t border-rose-light pt-6">
              * Recheio com frutas vermelhas a consultar, pois dependem da época nacional da fruta.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
