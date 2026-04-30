import { motion } from 'motion/react';
import { Cake, Gift, Heart, Star, ShoppingBag } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

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
    "https://images.unsplash.com/photo-1578985543813-2dfb399c302b?q=80&w=800",
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800"
  ]
};

const doces = {
  tradicionais: ["Brigadeiro", "Brigadeiro Branco", "Beijinho", "Coco Queimado", "Morango", "Brulée", "Casadinho"],
  especiais: ["Olho de Sogra", "Delícia de Damasco", "Pistache", "Ninho", "Ninho com Nutella", "Limão", "Churros", "Paçoca", "Café", "Cajuzinho"],
  images: [
    "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800",
    "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=800"
  ]
};

const personalizados = {
  items: [
    { name: "Mini Cupcake 2D", price: "R$ 10,00" },
    { name: "Trufa 2D", price: "R$ 8,00" },
    { name: "Trufa 3D", price: "R$ 16,00" },
    { name: "Bolo Bombom no Palito", price: "R$ 20,00" },
  ],
  images: [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800",
    "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800"
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-lead mb-4">Nosso Cardápio</h2>
          <div className="w-24 h-1 bg-rose mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto italic font-serif">
            "A doçura em cada detalhe, a perfeição em cada sabor."
          </p>
        </div>

        {/* Section: Bolos */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Cake className="text-rose-dark" size={32} />
            <h3 className="text-3xl font-serif">Bolos Personalizados</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <ImageCarousel images={bolos.images} className="h-[300px] rounded-3xl shadow-lg border border-rose-light" />
              <div className="grid sm:grid-cols-2 gap-4">
                {bolos.tipos.map((tipo) => (
                  <div key={tipo.name} className="p-6 bg-cream border border-rose-light rounded-xl hover:shadow-md transition-all">
                    <p className="font-serif text-lg mb-1">{tipo.name}</p>
                    <p className="text-rose-dark font-medium leading-none">
                      <span className="text-xs">a partir de</span> <br />
                      {tipo.price} <span className="text-sm font-normal text-gray-400">/{tipo.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-[#fdfaf8] rounded-2xl border border-dashed border-rose-dark/30">
                <p className="font-serif text-xl mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-rose" /> Opções de Massa
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  {bolos.massas.map(m => <li key={m} className="flex items-center gap-2"><div className="w-1 h-1 bg-rose rounded-full" /> {m}</li>)}
                </ul>
              </div>
              <div className="bg-cream p-8 rounded-2xl border border-rose-light">
                <p className="font-serif text-xl mb-6">Recheios Irresistíveis</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  {bolos.recheios.map(r => <span key={r} className="flex items-center gap-2">• {r}</span>)}
                </div>
                <p className="mt-8 text-xs italic text-rose-dark font-medium border-t border-rose-light pt-4">
                  * Recheio com frutas vermelhas a consultar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Doces */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Star className="text-rose-dark" size={32} />
            <h3 className="text-3xl font-serif">Doces Artesanais</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <ImageCarousel images={doces.images} className="h-full rounded-3xl shadow-lg border border-rose-light min-h-[300px]" />
            <div className="bg-cream rounded-3xl p-8 border border-rose-light relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-rose-light/20 -rotate-12 group-hover:scale-110 transition-transform">
                 <ShoppingBag size={80} />
               </div>
               <div className="relative z-10">
                 <h4 className="text-2xl font-serif mb-2">Tradicionais / Gourmet</h4>
                 <p className="text-rose-dark font-semibold text-lg mb-6">R$ 160,00 <span className="text-sm font-normal text-gray-400 font-sans">O cento</span></p>
                 <div className="grid grid-cols-1 gap-y-2 text-gray-600">
                   {doces.tradicionais.map(d => <span key={d}>• {d}</span>)}
                 </div>
               </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-rose-dark shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 text-rose-light/50 -rotate-12 group-hover:scale-110 transition-transform">
                 <Star size={80} />
               </div>
               <div className="relative z-10">
                 <h4 className="text-2xl font-serif mb-2">Especiais</h4>
                 <p className="text-rose-dark font-semibold text-lg mb-6">R$ 190,00 <span className="text-sm font-normal text-gray-400 font-sans">O cento</span></p>
                 <div className="grid grid-cols-1 gap-y-2 text-gray-600">
                   {doces.especiais.map(d => <span key={d}>• {d}</span>)}
                 </div>
               </div>
            </div>
          </div>
          <div className="mt-8 text-center p-4 bg-rose-light/20 rounded-lg inline-block mx-auto">
            <p className="text-rose-dark font-medium font-serif italic">Obs: Pedido mínimo de 25 unidades de cada sabor.</p>
          </div>
        </div>

        {/* Section: Personalizados & Pão de Mel */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Gift className="text-rose-dark" size={32} />
                <h3 className="text-3xl font-serif">Personalizados</h3>
              </div>
              <div className="bg-cream rounded-2xl p-8 space-y-4 border border-rose-light">
                {personalizados.items.map(p => (
                  <div key={p.name} className="flex justify-between items-center border-b border-rose-light/50 pb-2">
                    <span className="text-gray-700">{p.name}</span>
                    <span className="font-medium text-rose-dark">{p.price}</span>
                  </div>
                ))}
                <p className="text-xs italic text-gray-500 pt-4">
                  * Os valores podem sofrer alterações conforme o tema.
                </p>
              </div>
            </div>
            <ImageCarousel images={personalizados.images} className="h-full rounded-3xl shadow-lg border border-rose-light min-h-[300px]" />
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Heart className="text-rose-dark" size={32} />
                <h3 className="text-3xl font-serif">Pão de Mel Gourmet</h3>
              </div>
              <div className="bg-rose-dark text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-serif italic">A unidade</h4>
                    <span className="text-3xl font-light">R$ 5,00</span>
                  </div>
                  <div className="space-y-2 text-lg italic font-serif">
                       <p>• Doce de Leite</p>
                       <p>• Nozes</p>
                       <p>• Café</p>
                       <p>• Brigadeiro</p>
                       <p>• Côco</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm font-medium">Pedido mínimo: 30 unidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
