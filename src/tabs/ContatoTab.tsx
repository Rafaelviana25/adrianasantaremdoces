import { motion } from 'motion/react';
import { CONTACT } from '../lib/constants';
import { Instagram, Phone, Clock, CreditCard, CheckCircle, MessageCircle } from 'lucide-react';

export default function ContatoTab() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-6 pt-24 pb-32"
    >
      <h2 className="text-3xl font-elegant italic text-center mb-10 underline decoration-rose-light underline-offset-8">Contato & Informações</h2>

      <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-rose-light">
            <h3 className="text-xl font-georgia font-bold mb-6 flex items-center gap-3">
              <Phone className="text-rose-dark" size={20} /> Fale Conosco
            </h3>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-rose-dark transition-colors"
              >
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center border border-rose-light">
                  <MessageCircle size={18} />
                </div>
                <span className="font-georgia">{CONTACT.whatsappFormatted}</span>
              </a>
              <a 
                href={CONTACT.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-rose-dark transition-colors"
              >
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center border border-rose-light">
                  <Instagram size={18} />
                </div>
                <span className="font-georgia">{CONTACT.instagram}</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-rose-light">
            <h3 className="text-xl font-georgia font-bold mb-6 flex items-center gap-3">
              <CreditCard className="text-rose-dark" size={20} /> Pagamento
            </h3>
            <div className="space-y-3 text-gray-600">
               <p className="text-sm font-georgia">• PIX</p>
               <p className="text-sm font-georgia">• Transferência bancária</p>
               <p className="text-sm font-georgia">• Crédito (mediante consulta de taxas)</p>
            </div>
          </div>
        </div>

        <div className="bg-rose-dark p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110" />
          
          <h3 className="text-2xl font-elegant italic mb-8 border-b border-white/20 pb-4">Regras de Atendimento</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
               <Clock size={24} className="flex-shrink-0 opacity-80" />
               <div>
                 <p className="text-lg font-georgia mb-1">Reserva Antecipada</p>
                 <p className="text-rose-light text-xs font-georgia">Reserva com mínimo de 15 dias de antecedência para decorados.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <CheckCircle size={24} className="flex-shrink-0 opacity-80" />
               <div>
                 <p className="text-lg font-georgia mb-1">Confirmação do Pedido</p>
                 <p className="text-rose-light text-xs font-georgia">Pagamento de 50% do valor total. O restante na retirada ou entrega.</p>
               </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
             <p className="font-elegant italic text-base mb-1">Entregas em:</p>
             <p className="text-white font-georgia text-sm">Lago Norte e Noroeste (R$ 35,00 cada)</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
