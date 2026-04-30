import { motion } from 'motion/react';
import { CONTACT } from '../lib/constants';
import { Send } from 'lucide-react';

export default function EncomendaTab() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="container mx-auto px-6 py-32 flex flex-col justify-center items-center h-full min-h-[80vh]"
    >
      <div className="max-w-4xl w-full bg-white rounded-[4rem] shadow-2xl p-12 md:p-24 border border-rose-light text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-rose-light via-rose to-rose-dark" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src="/logo_dil_2.png" 
            alt="Logo" 
            className="h-32 mx-auto mb-12"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<h1 class="font-serif italic text-4xl text-rose-dark mb-12">Adriana Santarém</h1>');
            }}
          />
          
          <h2 className="text-4xl md:text-5xl font-serif text-lead mb-6">Pronta para transformar seu evento?</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Nossas encomendas são feitas sob medida para que cada bolo e cada doce 
            carregue a essência da sua comemoração. Clique abaixo para iniciar seu 
            atendimento exclusivo pelo WhatsApp.
          </p>

          <a 
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-rose-dark text-white px-12 py-6 rounded-full text-2xl font-serif italic overflow-hidden transition-all hover:pr-16 active:scale-95 shadow-lg hover:shadow-rose-dark/30"
          >
            <span className="relative z-10 font-bold">Solicitar Orçamentos</span>
            <Send className="relative z-10 transition-transform group-hover:translate-x-4" size={28} />
            <div className="absolute inset-0 bg-rose transition-transform translate-y-full group-hover:translate-y-0" />
          </a>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50">
             <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=200" className="w-full aspect-square object-cover rounded-xl" referrerPolicy="no-referrer" />
             <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=200" className="w-full aspect-square object-cover rounded-xl" referrerPolicy="no-referrer" />
             <img src="https://images.unsplash.com/photo-1578985543813-2dfb399c302b?q=80&w=200" className="w-full aspect-square object-cover rounded-xl" referrerPolicy="no-referrer" />
             <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=200" className="w-full aspect-square object-cover rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
