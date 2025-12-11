import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

import skinRecon from '@/assets/skin-recon-specialist.jpg';
import skinBlue from '@/assets/skin-blue-squire.jpg';

import bundleLegendary from '@/assets/bundle-legendary.jpg';
import skinShoto from '@/assets/skin-shoto.jpg';
import backblingWolfie from '@/assets/backbling-wolfie.jpg';
import vbucksIcon from '@/assets/vbucks_icon.png';
import skinAlien from '@/assets/skin-alien.jpg';
import skinGhostface from '@/assets/skin-ghostface.jpg';
import skinTornado from '@/assets/skin-tornado.jpg';
import skinMolten from '@/assets/skin-molten.jpg';
import skinMarceline from '@/assets/skin-marceline.jpg';
import skinMiku from '@/assets/skin-miku.jpg';
import skinVecna from '@/assets/skin-vecna.jpg';
import skinArt from '@/assets/skin-art.jpg';
import skinGodzilla from '@/assets/skin-godzilla.jpg';
import skinDanny from '@/assets/skin-danny.jpg';
import skinSukuna from '@/assets/skin-sukuna.jpg';
import emoteGriddy from '@/assets/emote-griddy.png';
import emoteTakeTheL from '@/assets/emote-take-the-l.png';
import emoteOrange from '@/assets/emote-orange-justice.png';
import emoteTidy from '@/assets/emote-tidy.png';
import emoteWorld from '@/assets/emote-around-world.png';
import emoteEnd from '@/assets/emote-in-the-end.png';
import pickaxeVecna from '@/assets/pickaxe-vecna.jpg';
import pickaxeSymbiote from '@/assets/pickaxe-symbiote.jpg';
import pickaxeScratchy from '@/assets/pickaxe-scratchy.jpg';
import pickaxeHadean from '@/assets/pickaxe-hadean.jpg';

type Rarity = 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common';
type ItemType = 'Skins' | 'Pickaxes' | 'Emotes';

interface ShopItem {
  id: number;
  name: string;
  type: ItemType;
  rarity: Rarity;
  price: string;
  image: string;
}

const shopItems: ShopItem[] = [
  { id: 1, name: 'Molten Metal Mouth', type: 'Skins', rarity: 'legendary', price: '2,000 V-Bucks', image: skinMolten },
  { id: 2, name: 'Marceline', type: 'Skins', rarity: 'epic', price: '1,500 V-Bucks', image: skinMarceline },
  { id: 3, name: 'Hatsune Miku', type: 'Skins', rarity: 'legendary', price: '2,000 V-Bucks', image: skinMiku },
  { id: 4, name: 'Xenomorph', type: 'Skins', rarity: 'legendary', price: '2,000 V-Bucks', image: skinAlien },
  { id: 5, name: 'Ghostface', type: 'Skins', rarity: 'epic', price: '1,500 V-Bucks', image: skinGhostface },
  { id: 6, name: 'Terrible Tornado', type: 'Skins', rarity: 'legendary', price: '2,200 V-Bucks', image: skinTornado },
  { id: 7, name: 'Vecna', type: 'Skins', rarity: 'legendary', price: '2,000 V-Bucks', image: skinVecna },
  { id: 8, name: 'Art the Clown', type: 'Skins', rarity: 'epic', price: '1,500 V-Bucks', image: skinArt },
  { id: 9, name: 'Godzilla', type: 'Skins', rarity: 'legendary', price: '2,500 V-Bucks', image: skinGodzilla },
  { id: 10, name: 'Danny Phantom', type: 'Skins', rarity: 'epic', price: '1,500 V-Bucks', image: skinDanny },
  { id: 11, name: 'Ryomen Sukuna', type: 'Skins', rarity: 'legendary', price: '2,000 V-Bucks', image: skinSukuna },
  { id: 12, name: 'Symbiote Slicer', type: 'Pickaxes', rarity: 'epic', price: '1,200 V-Bucks', image: pickaxeSymbiote },
  { id: 13, name: 'Hadean Key', type: 'Pickaxes', rarity: 'rare', price: '800 V-Bucks', image: pickaxeHadean },
  { id: 14, name: 'Vecna\'s Axe', type: 'Pickaxes', rarity: 'rare', price: '800 V-Bucks', image: pickaxeVecna },
  { id: 15, name: 'Scratchy', type: 'Pickaxes', rarity: 'uncommon', price: '500 V-Bucks', image: pickaxeScratchy },
  { id: 16, name: 'Get Griddy', type: 'Emotes', rarity: 'epic', price: '500 V-Bucks', image: emoteGriddy },
  { id: 17, name: 'Take The L', type: 'Emotes', rarity: 'rare', price: '500 V-Bucks', image: emoteTakeTheL },
  { id: 18, name: 'Orange Justice', type: 'Emotes', rarity: 'epic', price: '800 V-Bucks', image: emoteOrange },
  { id: 19, name: 'Tidy', type: 'Emotes', rarity: 'rare', price: '500 V-Bucks', image: emoteTidy },
  { id: 20, name: 'Around The World', type: 'Emotes', rarity: 'rare', price: '500 V-Bucks', image: emoteWorld },
  { id: 21, name: 'In The End', type: 'Emotes', rarity: 'rare', price: '500 V-Bucks', image: emoteEnd },
];

const filters: (ItemType | 'All')[] = ['All', 'Skins', 'Pickaxes', 'Emotes'];

const rarityColors: Record<Rarity, string> = {
  legendary: 'rarity-legendary',
  epic: 'rarity-epic',
  rare: 'rarity-rare',
  uncommon: 'rarity-uncommon',
  common: 'rarity-common',
};

const rarityBgColors: Record<Rarity, string> = {
  legendary: 'bg-rarity-legendary',
  epic: 'bg-rarity-epic',
  rare: 'bg-rarity-rare',
  uncommon: 'bg-rarity-uncommon',
  common: 'bg-rarity-common',
};

interface ItemShopSectionProps {
  onAddToCart: (item: { name: string; price: string; image: string }) => void;
}

export const ItemShopSection = ({ onAddToCart }: ItemShopSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<ItemType | 'All'>('All');

  const filteredItems = activeFilter === 'All'
    ? shopItems
    : shopItems.filter((item) => item.type === activeFilter);

  return (
    <section id="item-shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm mb-4 block"
          >
            🔥 FORTNITE ITEM SHOP
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4"
          >
            Trending & Essentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Get the hottest items from the Fortnite Item Shop. Fresh drops, exclusive bundles, and timeless classics.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'secondary'}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 ${activeFilter === filter
                ? 'bg-primary text-primary-foreground'
                : 'bg-card hover:bg-muted text-muted-foreground'
                }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-transparent hover:bg-card/40 rounded-md p-2 transition-all duration-200 cursor-pointer"
            >
              {/* Rarity Band */}
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-secondary/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Rarity Indicator (Corner) */}
                <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-${rarityColors[item.rarity]} border-l-transparent opacity-80`} />

                {/* Hover Add Button */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-90 group-hover:scale-100">
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white text-black hover:bg-white/90 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart({ name: item.name, price: item.price, image: item.image });
                    }}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-1 px-1">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                  {item.type}
                </span>

                <h3 className="text-sm font-fortnite text-foreground leading-tight truncate group-hover:text-white transition-colors">
                  {item.name}
                </h3>

                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    {/* Original Price (Struck Through) */}
                    <div className="flex items-center gap-0.5 opacity-50 relative grayscale">
                      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-500 -rotate-6 scale-x-110" />
                      <img src={vbucksIcon} alt="V-Bucks" className="w-3 h-3 object-contain" />
                      <span className="font-fortnite text-xs text-muted-foreground">{item.price.replace(' V-Bucks', '')}</span>
                    </div>

                    {/* FREE Label */}
                    <span className="font-fortnite text-sm text-green-400 font-black tracking-wide">FREE</span>
                  </div>

                  {/* Limited Time Badge */}
                  <span className="inline-block text-[9px] font-bold text-gold bg-gold/10 px-1.5 py-0.5 rounded border border-gold/20 uppercase tracking-wider">
                    Limited Time Offer
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
