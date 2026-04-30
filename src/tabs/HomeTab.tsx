import { motion } from 'motion/react';
import { CONTACT } from '../lib/constants';

export default function HomeTab() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with White Gradient and Fade Effect */}
      <div className="absolute inset-0 z-0 bg-white">
        <img 
          src="/hero_bg.png" 
          alt="Bolos e Doces Adriana Santarém" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        {/* Soft White gradient: Fades into image center with a clean, light aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center px-6 flex flex-col items-center w-full max-w-2xl"
      >
        {/* Central Logo - Clean */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-12 md:mb-16 drop-shadow-sm"
        >
          <img 
            src="/logo_dil_2.png" 
            alt="Adriana Santarém Logo" 
            className="h-44 md:h-80 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<div class="text-rose-dark text-center"><h1 class="text-5xl md:text-8xl font-elegant italic tracking-tighter">Adriana Santarém</h1><p class="text-[10px] md:text-sm tracking-[0.5em] mt-4 font-sans uppercase font-light">Bolos & Doces Finos</p></div>');
            }}
          />
        </motion.div>
        
        {/* Decorative Divider */}
        <div className="flex items-center gap-4 w-full mb-12 opacity-30">
          <div className="flex-grow h-[0.5px] bg-gradient-to-r from-transparent to-rose-dark" />
          <div className="w-1.5 h-1.5 rounded-full bg-rose-dark" />
          <div className="flex-grow h-[0.5px] bg-gradient-to-l from-transparent to-rose-dark" />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
          className="text-lg md:text-3xl font-elegant italic font-light tracking-wide leading-relaxed text-black px-4"
        >
          "Transformando sonhos em arte comestível,<br />
          onde o amor e a confeitaria se encontram."
        </motion.p>
      </motion.div>
    </section>
  );
}
