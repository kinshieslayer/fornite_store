import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

interface GiftDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: string;
    image: string;
  } | null;
}

export const GiftDeliveryModal = ({ isOpen, onClose, item }: GiftDeliveryModalProps) => {
  const [epicId, setEpicId] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!epicId.trim() || !confirmed) return;
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setEpicId('');
      setConfirmed(false);
    }, 2000);
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-[95%] max-w-lg max-h-[90vh] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-muted transition-colors z-10"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Header */}
              <div className="p-6 pb-0">
                <h2 className="font-display text-2xl font-black text-foreground mb-2">
                  Confirm Item Delivery
                </h2>
                <p className="text-muted-foreground text-sm">
                  Your item will be gifted to the Epic Games account you specify below.
                </p>
              </div>

              {/* Item Preview */}
              <div className="p-6">
                <div className="flex items-center gap-4 bg-secondary/50 rounded-xl p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold">{item.price}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="px-6 pb-6 space-y-4">
                {/* Epic ID Input */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Enter Recipient's Epic Games User Tag or Name
                  </label>
                  <Input
                    value={epicId}
                    onChange={(e) => setEpicId(e.target.value)}
                    placeholder="e.g., EpicGamer123"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                {/* Confirmation Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="confirm"
                    checked={confirmed}
                    onCheckedChange={(checked) => setConfirmed(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="confirm" className="text-sm text-muted-foreground cursor-pointer">
                    I certify that I have <strong className="text-foreground">not made a mistake</strong> entering the ID.
                    Errors will result in delivery failure.
                  </label>
                </div>

                {/* Disclaimer */}
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <span className="font-bold text-foreground text-sm">DISCLAIMER</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    To ensure secure and successful gift delivery via the Epic Games network, please adhere to the following:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-neon-green" />
                      Do not use any VPN software.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-neon-green" />
                      Disable all Adblockers.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-neon-green" />
                      Do not attempt to use any cheating software.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer / Submit Button */}
            <div className="p-6 pt-0 bg-card border-t border-border mt-auto sticky bottom-0 z-20">
              <div className="pt-4">
                <Button
                  onClick={handleSubmit}
                  disabled={!epicId.trim() || !confirmed || isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan py-6 text-lg font-bold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Star className="h-5 w-5 mr-2" />
                      START CLAIMING
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
