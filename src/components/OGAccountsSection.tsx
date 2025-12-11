import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ogAccount1 from '@/assets/og-account-neo.png';
import ogAccount2 from '@/assets/og-account-sentinel.png';
import { SponsorLockerModal } from './SponsorLockerModal';

interface OGAccount {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  badge?: string;
}

const ogAccounts: OGAccount[] = [
  {
    id: 1,
    title: 'Neo Versa Collection',
    description: '67 skins | Neo Versa | Joey | Torin | 1 exclusives',
    price: '$899.99',
    features: ['67 Skins', 'Neo Versa', 'Joey', 'Torin'],
    image: ogAccount1,
    badge: 'Limited Time FREE',
  },
  {
    id: 2,
    title: 'Sentinel & Zeus Bundle',
    description: '130 skins | Sentinel | Zeus | Fade | 0 exclusives',
    price: '$649.99',
    features: ['130 Skins', 'Sentinel', 'Zeus', 'Fade'],
    image: ogAccount2,
    badge: 'Limited Time FREE',
  },
];

interface OGAccountsSectionProps {
  onInquire: () => void;
}

export const OGAccountsSection = ({ onInquire }: OGAccountsSectionProps) => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  return (
    <section id="og-accounts" className="py-20 relative overflow-hidden">
      <SponsorLockerModal
        isOpen={!!selectedAccount}
        onClose={() => setSelectedAccount(null)}
        accountName={selectedAccount || ''}
      />
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(45 100% 50% / 0.3) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-gold font-bold text-sm mb-4"
          >
            <Sparkles className="h-4 w-4" />
            THE VAULT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-4"
          >
            <span className="text-gradient-gold">💎 OG & Legacy Accounts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Own a piece of Fortnite history. Premium verified accounts with the rarest OG cosmetics from the earliest seasons.
          </motion.p>
        </div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ogAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500"
            >
              {/* Gold Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              </div>

              {/* Badge */}
              {account.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-bold">
                    {account.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={account.image}
                  alt={account.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-fortnite font-bold text-xl md:text-2xl text-foreground mb-2">
                  {account.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {account.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {account.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-red-400 line-through opacity-70 block">{account.price}</span>
                    <div className="text-3xl font-display font-black text-green-400 flex items-center gap-2">
                      FREE <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">Limited</span>
                    </div>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:opacity-90 shadow-lg shadow-green-500/20"
                    onClick={() => setSelectedAccount(account.title)}
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    GET FREE
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto bg-card/50 rounded-lg px-6 py-4 border border-border">
            ⚠️ <strong>Disclaimer:</strong> All accounts are verified and come with full purchase protection.
            Limited stock available. See FAQ for transfer details and warranty information.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
