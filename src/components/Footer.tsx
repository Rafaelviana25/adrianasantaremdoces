import { Instagram, Phone } from 'lucide-react';
import { CONTACT } from '../lib/constants';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-rose-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16 items-center text-center md:text-left">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img 
              src="/logo_dil_2.png" 
              alt="Adriana Santarém Logo" 
              className="h-28 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<span class="font-serif italic text-2xl text-rose-dark">Adriana Santarém</span>');
              }}
            />
            <p className="text-gray-500 max-w-xs italic font-serif">
              Confeitaria de alto padrão, transformando sonhos em sabores inesquecíveis.
            </p>
          </div>

          {/* Navigation/Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-rose-dark">Navegação</h4>
            <div className="flex flex-col space-y-3 font-medium text-gray-600">
              <a href="#home" className="hover:text-rose transition-colors">Início</a>
              <a href="#menu" className="hover:text-rose transition-colors">Cardápio</a>
              <a href="#order" className="hover:text-rose transition-colors">Encomendas</a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-rose-dark">Contato</h4>
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <a 
                href={CONTACT.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-rose transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-cream border border-rose-light flex items-center justify-center">
                  <Instagram size={20} />
                </div>
                <span>{CONTACT.instagram}</span>
              </a>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-rose transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-cream border border-rose-light flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span>{CONTACT.whatsappFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-light pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Adriana Santarém Bolos & Doces. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
