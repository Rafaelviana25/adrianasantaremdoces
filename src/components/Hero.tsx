import { motion } from 'motion/react';
import { WHATSAPP_LINK } from '../lib/constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#faf7f5]">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-light/20 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-rose-dark font-medium tracking-widest uppercase text-sm mb-4 block">
            Confeitaria Artesanal
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-lead leading-tight mb-6">
            Momentos doces, <br />
            <span className="italic font-light">feitos com amor.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Especialistas em bolos personalizados de alto padrão e doces gourmet 
            que transformam qualquer celebração em um evento inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-center py-4 text-lg">
              Faça sua Encomenda
            </a>
            <a href="#menu" className="px-8 py-4 border border-rose text-rose-dark rounded-full font-medium text-center hover:bg-rose/10 transition-colors">
              Explorar Cardápio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200" 
              alt="Bolo Elegante" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl -rotate-3 hidden md:block">
            <p className="font-serif italic text-rose-dark text-xl">Artesanal & Premium</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
