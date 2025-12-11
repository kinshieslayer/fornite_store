import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ogBundle1 from '@/assets/og-bundle-1.webp';
import ogBundle2 from '@/assets/og-bundle-2.webp';
import ogBundle3 from '@/assets/og-bundle-3.webp';
import ogBundle4 from '@/assets/og-bundle-4.webp';
import ogBundle5 from '@/assets/og-bundle-5.webp';
import ogBundle6 from '@/assets/og-bundle-6.webp';
import { SponsorLockerModal } from './SponsorLockerModal';
import vbucksIcon from '@/assets/vbucks_icon.png';

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
    title: '202 SKINS + 4555 V-BUCKS',
    description: 'Premium loaded account containing 115 Emotes and 173 Pickaxes.',
    price: '$199.99',
    features: ['202 Skins', '4555 V-Bucks', '115 Emotes', '173 Pickaxes'],
    image: ogBundle1,
    badge: 'Limited Time FREE',
  },
  {
    id: 2,
    title: '297 SKINS + 150 V-BUCKS',
    description: 'Massive collection with 297 Skins, 191 Emotes, and 230 Pickaxes.',
    price: '$159.99',
    features: ['297 Skins', '150 V-Bucks', '191 Emotes', '230 Pickaxes'],
    image: ogBundle2,
    badge: 'Limited Time FREE',
  },
  {
    id: 3,
    title: '109 SKINS + 400 V-BUCKS',
    description: 'Perfect starter stack with 79 Emotes and 70 Pickaxes.',
    price: '$99.99',
    features: ['109 Skins', '400 V-Bucks', '79 Emotes', '70 Pickaxes'],
    image: ogBundle3,
    badge: 'Limited Time FREE',
  },
  {
    id: 4,
    title: '297 SKINS + 50 V-BUCKS',
    description: 'Huge inventory with 253 Emotes and 278 Pickaxes included.',
    price: '$159.99',
    features: ['297 Skins', '50 V-Bucks', '253 Emotes', '278 Pickaxes'],
    image: ogBundle4,
    badge: 'Limited Time FREE',
  },
  {
    id: 5,
    title: '157 SKINS + 100 V-BUCKS',
    description: 'Solid account featuring 144 Emotes and 177 Pickaxes.',
    price: '$129.99',
    features: ['157 Skins', '100 V-Bucks', '144 Emotes', '177 Pickaxes'],
    image: ogBundle5,
    badge: 'Limited Time FREE',
  },
  {
    id: 6,
    title: '164 SKINS + 200 V-BUCKS',
    description: 'Great value with 128 Emotes and 162 Pickaxes.',
    price: '$139.99',
    features: ['164 Skins', '200 V-Bucks', '128 Emotes', '162 Pickaxes'],
    image: ogBundle6,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <h3 className="font-fortnite font-bold text-xl md:text-2xl text-foreground mb-2 flex items-center flex-wrap gap-x-2">
                  {account.title.includes('V-BUCKS') ? (
                    <>
                      {account.title.split(' + ').map((part, i) => (
                        <span key={i} className="flex items-center gap-1">
                          {i > 0 && <span className="mr-1">+</span>}
                          {part.includes('V-BUCKS') ? (
                            <>
                              {part.replace(' V-BUCKS', '')}
                              <img src={vbucksIcon} alt="V-Bucks" className="w-5 h-5 object-contain" />
                            </>
                          ) : (
                            part
                          )}
                        </span>
                      ))}
                    </>
                  ) : (
                    account.title
                  )}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {account.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {account.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground flex items-center gap-1"
                    >
                      {feature.includes('V-Bucks') ? (
                        <>
                          {feature.replace(' V-Bucks', '')}
                          <img src={vbucksIcon} alt="V-Bucks" className="w-3.5 h-3.5 object-contain" />
                        </>
                      ) : (
                        feature
                      )}
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
