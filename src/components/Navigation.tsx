import { NAV_LINKS } from '../lib/constants';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const TABS = [
  { id: 'inicio', label: 'INÍCIO' },
  { id: 'bolos', label: 'BOLOS' },
  { id: 'doces', label: 'DOCES' },
  { id: 'contato', label: 'CONTATO' },
  { id: 'encomenda', label: 'ENCOMENDA' },
];

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const isTransparent = activeTab === 'inicio';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-4 md:py-6",
      isTransparent ? "bg-transparent" : "bg-white/80 backdrop-blur-md shadow-sm"
    )}>
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">

        <div className="flex flex-nowrap justify-center gap-1 md:gap-4 p-1 md:p-1.5 bg-black/5 rounded-full backdrop-blur-sm overflow-x-auto max-w-full no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-2.5 md:px-6 py-2 md:py-2 text-[8px] md:text-sm font-medium tracking-widest transition-all rounded-full whitespace-nowrap",
                activeTab === tab.id 
                  ? "text-white shadow-md" 
                  : "text-lead/60 hover:text-rose-dark"
              )}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-rose-dark rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
