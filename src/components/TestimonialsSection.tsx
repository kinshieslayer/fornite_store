import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  userTag: string;
  verified: boolean;
  purchase: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Absolutely incredible service! Got my OG account within 10 minutes. The Skull Trooper was worth every penny. Will definitely be back for more!",
    userTag: "V&V Buyer #1042",
    verified: true,
    purchase: "OG Season 1 Account",
    rating: 5,
  },
  {
    id: 2,
    quote: "Best place to get Fortnite items. The gifting process was smooth and the support team helped me every step of the way.",
    userTag: "V&V Buyer #876",
    verified: true,
    purchase: "Wolfie Bundle",
    rating: 5,
  },
  {
    id: 3,
    quote: "I was skeptical at first, but these guys are legit! Got the Shoto bundle for my friend as a gift. Fast delivery, no issues at all.",
    userTag: "V&V Buyer #1589",
    verified: true,
    purchase: "Shoto Todoroki Bundle",
    rating: 5,
  },
  {
    id: 4,
    quote: "The Black Knight account was everything they promised. Full Season 2 battle pass, all OG items included. Amazing value!",
    userTag: "V&V Buyer #743",
    verified: true,
    purchase: "Black Knight Collection",
    rating: 5,
  },
  {
    id: 5,
    quote: "24/7 support is no joke. Had a question at 3 AM and got help immediately. These guys really care about their customers.",
    userTag: "V&V Buyer #2104",
    verified: true,
    purchase: "Inferno Legends Pack",
    rating: 5,
  },
  {
    id: 6,
    quote: "Third time buying from Vault & Velocity. Always reliable, always fast. They're my go-to for all Fortnite purchases now.",
    userTag: "V&V Buyer #456",
    verified: true,
    purchase: "Multiple Items",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-black text-foreground mb-4"
          >
            ⭐ Trusted Voices: What Our Buyers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Join thousands of satisfied customers who trust Vault & Velocity for their Fortnite needs.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-sm">
                      {testimonial.userTag}
                    </span>
                    {testimonial.verified && (
                      <span className="flex items-center gap-1 text-xs text-neon-green">
                        <CheckCircle className="h-3 w-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    (Purchased: {testimonial.purchase})
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
