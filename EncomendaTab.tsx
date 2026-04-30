import { motion } from 'motion/react';
import MarqueeCarousel from '../components/MarqueeCarousel';

const doces = {
  tradicionais: ["Brigadeiro", "Brigadeiro Branco", "Beijinho", "Coco Queimado", "Morango", "Brulée", "Casadinho"],
  especiais: ["Olho de Sogra", "Delícia de Damasco", "Pistache", "Ninho", "Ninho com Nutella", "Limão", "Churros", "Paçoca", "Café", "Cajuzinho"],
  images: [
    "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800",
    "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=800",
    "https://images.unsplash.com/photo-1571506191037-88bc757604ee?q=80&w=800",
    "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?q=80&w=800"
  ]
};

const personalizados = {
  items: [
    { name: "Mini Cupcake 2D", price: "R$ 10,00" },
    { name: "Trufa 2D", price: "R$ 8,00" },
    { name: "Trufa 3D", price: "R$ 16,00" },
    { name: "Bolo Bombom no Palito", price: "R$ 20,00" },
    { name: "Pão de Mel Gourmet", price: "R$ 5,00" }
  ],
  images: [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800",
    "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800",
    "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=800",
    "https://images.unsplash.com/photo-1548848221-0c2e497ed557?q=80&w=800",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800"
  ]
};

export default function DocesTab() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 pt-24 pb-32"
    >
      <h2 className="text-3xl font-elegant italic text-center mb-4 underline decoration-rose-light underline-offset-8">Doces de Luxo</h2>
      
      {/* Featured Marquee Carousel at the top */}
      <div className="w-full mb-6">
        <MarqueeCarousel images={[...doces.images, ...personalizados.images]} className="py-2" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        
        <div className="bg-white p-10 rounded-3xl border border-rose-light shadow-sm">
          <h3 className="text-[22px] font-georgia font-bold mb-1">Tradicionais / Gourmet</h3>
          <p className="text-[#7d5550] font-medium mb-6">R$ 160,00 o cento</p>
          <div className="space-y-2 text-gray-600">
             {doces.tradicionais.map(d => <p key={d} className="font-georgia text-[17px] leading-[28px]">• {d}</p>)}
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-rose-light shadow-sm">
          <h3 className="text-[22px] font-georgia font-bold mb-1">Especiais</h3>
          <p className="text-[#7d5550] font-medium mb-6">R$ 190,00 o cento</p>
          <div className="space-y-2 text-gray-600">
             {doces.especiais.map(d => <p key={d} className="font-georgia text-[17px] leading-[28px]">• {d}</p>)}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-1 gap-12 items-center">
        <div className="bg-white p-10 rounded-3xl border border-rose-light shadow-sm">
          <h3 className="text-[22px] font-georgia font-bold mb-8 border-b border-rose-light pb-4">Personalizados & Pão de Mel</h3>
          <div className="space-y-4">
            {personalizados.items.map(p => (
              <div key={p.name} className="flex justify-between items-center border-b border-rose-light/20 pb-2">
                <span className="font-georgia text-[17px] leading-[28px] text-gray-700 italic">{p.name}</span>
                <span className="font-medium text-[#7d5550] font-georgia">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-gray-400">Pedido mínimo de 25-30 unidades conforme o produto.</p>
        </div>
      </div>

      <div className="mt-20 p-8 bg-rose-light/20 rounded-2xl text-center">
        <p className="text-rose-dark font-serif italic text-xl">"Cada doce é uma pequena obra de arte, moldada para encantar seus sentidos."</p>
      </div>
    </motion.div>
  );
}
