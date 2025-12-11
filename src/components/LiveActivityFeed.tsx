import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const usernames = [
  'NightRaider_X', 'PixelStorm99', 'ShadowHunter', 'VictoryLane', 'CrystalDawn',
  'ThunderBolt44', 'NovaFlare', 'DragonSlayer', 'MysticWolf', 'StarBreaker',
  'BlazingTiger', 'FrostBite22', 'CosmicDust', 'NeonPhoenix', 'StormChaser',
  'LunarEclipse', 'CyberNinja', 'TurboRocket', 'GoldenEagle', 'IronWill88',
  'SilverArrow', 'FlameKnight', 'DarkVortex', 'BrightStar', 'SwiftWind',
  'RoyalPanda', 'ElectricSoul', 'CrimsonWave', 'OceanMist', 'MountainKing',
  'DesertFox', 'JungleCat', 'ArcticWolf', 'SummerStorm', 'WinterFrost',
  'SpringRain', 'AutumnLeaf', 'MidnightSun', 'DawnBreaker', 'TwilightZone',
  'EternalFlame', 'InfiniteLoop', 'QuantumLeap', 'ParallelPath', 'VectorPrime',
  'AlphaOmega', 'BetaTester', 'GammaRay', 'DeltaForce', 'EpsilonMark',
];

const items = [
  'Shoto Todoroki Bundle', 'Recon Specialist', 'Wolfie Bundle', 'Spectrum Slicer',
  'Blue Squire', 'Neon Groove Emote', 'Inferno Legends Pack', 'Black Knight Account',
  'Renegade Raider Account', 'Skull Trooper', 'Galaxy Skin', 'Ikonik Bundle',
  'Travis Scott Bundle', 'Mako Glider', 'Aerial Assault Trooper Account',
];

export const LiveActivityFeed = () => {
  const [notification, setNotification] = useState<{ username: string; item: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const username = usernames[Math.floor(Math.random() * usernames.length)];
      const item = items[Math.floor(Math.random() * items.length)];
      setNotification({ username, item });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Initial delay
    const initialDelay = setTimeout(showNotification, 3000);

    // Recurring notifications
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs">
      <AnimatePresence>
        {isVisible && notification && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="glass-card p-4 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🎮</span>
              </div>
              <div>
                <p className="text-foreground text-sm">
                  <span className="font-bold text-primary">{notification.username}</span>
                  {' '}just claimed the{' '}
                  <span className="font-bold text-gold">{notification.item}</span>!
                </p>
                <p className="text-xs text-muted-foreground mt-1">Just now</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
