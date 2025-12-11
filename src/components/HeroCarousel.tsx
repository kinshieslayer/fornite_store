import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/fortnie_main_bg.jpg';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  badge?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'DISCOVER OUR DEALS',
    subtitle: 'Unlock verified OG accounts and rare skins instantly. Secure, fast, and legendary.',
    price: 'LIMITED TIME OFFERS',
    image: heroImage,
    badge: 'NEW SEASON',
  },
];

export const HeroCarousel = ({ onAddToCart }: { onAddToCart: (item: { name: string; price: string; image: string }) => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 lg:pt-0">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {slide.badge && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-sm font-bold mb-6"
                >
                  ⚡ {slide.badge}
                </motion.span>
              )}

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                <span className="text-foreground">{slide.title}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-3xl md:text-4xl font-display font-black text-gradient-cyan">
                    {slide.price}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan text-lg px-8 py-6 font-bold"
                  onClick={() => onAddToCart({ name: slide.title, price: slide.price, image: slide.image })}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  ADD TO CART
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-muted-foreground/30 text-foreground hover:bg-secondary text-lg px-8 py-6"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      {heroSlides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {heroSlides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1.5 rounded-full transition-all ${idx === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
