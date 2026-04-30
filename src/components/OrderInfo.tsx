import { Clock, CheckCircle, CreditCard, Truck } from 'lucide-react';
import { CONTACT } from '../lib/constants';

const policies = [
  {
    icon: <Clock className="text-rose-dark" />,
    title: "Prazos",
    description: "É necessário fazer uma reserva com o mínimo de 15 dias de antecedência para bolos decorados."
  },
  {
    icon: <CheckCircle className="text-rose-dark" />,
    title: "Confirmação",
    description: "A confirmação do pedido se dá através do pagamento de 50% do valor total, o restante na retirada ou entrega."
  },
  {
    icon: <CreditCard className="text-rose-dark" />,
    title: "Pagamento",
    description: `Pix (Chave CPF: ${CONTACT.pixKey}), transferência bancária ou crédito (consulte taxas).`
  },
  {
    icon: <Truck className="text-rose-dark" />,
    title: "Frete / Entrega",
    description: "Lago Norte (R$ 35,00) e Noroeste (R$ 35,00). Outras regiões sob consulta."
  }
];

export default function OrderInfo() {
  return (
    <section id="order" className="py-24 bg-[#fdfaf8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-lead mb-4">Informações de Encomenda</h2>
            <p className="text-gray-500">Tudo o que você precisa saber para garantir sua reserva.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((p, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm border border-rose-light hover:translate-y-[-4px] transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-light/30 rounded-full flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2">{p.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-rose-dark rounded-3xl text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
            <h3 className="text-3xl font-serif italic mb-6 relative z-10">Pronta para adoçar sua festa?</h3>
            <p className="mb-10 text-rose-light relative z-10 max-w-lg mx-auto">
              Clique no botão abaixo para iniciar seu atendimento personalizado pelo WhatsApp. Estamos ansiosos para criar algo único para você.
            </p>
            <a 
              href={`https://wa.me/${CONTACT.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-rose-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-light transition-colors relative z-10"
            >
              Falar com Adriana agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
