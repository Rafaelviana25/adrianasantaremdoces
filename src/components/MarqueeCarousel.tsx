import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface MarqueeCarouselProps {
  images: string[];
  className?: string;
}

export default function MarqueeCarousel({ images, className = "" }: MarqueeCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [totalWidth, setTotalWidth] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Triple the images to ensure there's always content regardless of drag direction
  const tripledImages = [...images, ...images, ...images];
  const speed = 80; // Pixels per second - slightly faster as requested previously

  useEffect(() => {
    if (!scrollRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === scrollRef.current) {
          setTotalWidth(scrollRef.current.scrollWidth / 3);
        }
      }
    });

    resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current !== null) {
      const deltaTime = (time - lastTimeRef.current) / 1000;
      
      if (!isPaused && !isDragging && !selectedImage) {
        x.current -= speed * deltaTime;
        
        // Reset X to loop seamlessly
        if (totalWidth > 0 && Math.abs(x.current) >= totalWidth) {
          x.current += totalWidth;
        }
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${x.current}px)`;
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging, selectedImage, totalWidth]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  const handleDrag = (_: any, info: any) => {
    x.current += info.delta.x;
    
    // Boundary check for infinite feel while dragging
    if (totalWidth > 0) {
      if (x.current > 0) {
        x.current -= totalWidth;
      } else if (Math.abs(x.current) > totalWidth * 2) {
        x.current += totalWidth;
      }
    }
  };

  return (
    <div className={`relative w-full overflow-hidden py-4 select-none ${className}`}>
      {/* Marquee Container */}
      <motion.div 
        className="flex cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        drag="x"
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
        dragConstraints={{ left: -10000, right: 10000 }} // Large constraints to allow free movement
        dragElastic={0}
        dragMomentum={false}
      >
        <div
          ref={(el) => {
            containerRef.current = el;
            scrollRef.current = el;
          }}
          className="flex gap-6 px-3"
          style={{ willChange: 'transform' }}
        >
          {tripledImages.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="group flex-shrink-0 w-56 md:w-72 aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] cursor-pointer border-4 border-white transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
              onClick={() => {
                if (!isDragging) setSelectedImage(img);
              }}
            >
              <img
                src={img}
                alt="Confeitaria"
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-8 md:-right-12 p-3 text-white hover:text-rose-light transition-colors bg-white/10 rounded-full backdrop-blur-sm"
                aria-label="Fechar"
              >
                <X size={28} />
              </button>
              
              <img
                src={selectedImage}
                alt="Visualização ampliada"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/20"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interaction Hint */}
      <div className="mt-4 text-center text-rose-dark/40 text-[10px] md:text-sm font-serif italic tracking-widest uppercase">
        Deslize para navegar • Clique para ampliar
      </div>
    </div>
  );
}
