import { motion } from 'framer-motion';
import { Shield, Zap, Users, Clock, CheckCircle, HeadphonesIcon } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: '24/7 Account Guarantee',
    description: 'Full protection on every purchase with our comprehensive warranty program.',
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get your items and accounts delivered within minutes of purchase.',
  },
  {
    icon: Users,
    title: '1,000+ Happy Customers',
    description: 'Join our growing community of satisfied Fortnite enthusiasts.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our team is always available to help with any questions or issues.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Accounts',
    description: 'Every OG account goes through rigorous verification before listing.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Live Chat Support',
    description: 'Get instant help through our Discord and live chat systems.',
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-black text-foreground mb-4"
          >
            ✅ Buy with Confidence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            We prioritize your security and satisfaction with every transaction.
          </motion.p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
