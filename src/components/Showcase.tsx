import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1578985543813-2dfb399c302b?q=80&w=800",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800",
  "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800",
  "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800",
  "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800",
  "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=800",
];

export default function Showcase() {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h3 className="heading-elegant text-3xl text-rose-dark text-center">Nossas Inspirações</h3>
      </div>
      
      <div className="flex relative">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }
          }}
        >
          {/* Double the array to handle infinite loop seamlessly */}
          {[...images, ...images].map((src, i) => (
            <div key={i} className="w-[300px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
              <img 
                src={src} 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
