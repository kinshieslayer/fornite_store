import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ItemShopSection } from '@/components/ItemShopSection';
import { OGAccountsSection } from '@/components/OGAccountsSection';
import { TrustSection } from '@/components/TrustSection';
import { LiveActivityFeed } from '@/components/LiveActivityFeed';
import { GiftDeliveryModal } from '@/components/GiftDeliveryModal';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { InquiryModal } from '@/components/InquiryModal';

interface CartItem {
  name: string;
  price: string;
  image: string;
}

const Index = () => {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  const handleAddToCart = (item: CartItem) => {
    setSelectedItem(item);
    setIsGiftModalOpen(true);
  };

  const handleCloseGiftModal = () => {
    setIsGiftModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <HeroCarousel onAddToCart={handleAddToCart} />
      
      <ItemShopSection onAddToCart={handleAddToCart} />
      
      <OGAccountsSection onInquire={() => setIsInquiryModalOpen(true)} />
      
      <TrustSection />
      
      <TestimonialsSection />
      
      <Footer />
      
      {/* Live Activity Feed */}
      <LiveActivityFeed />
      
      {/* Gift Delivery Modal */}
      <GiftDeliveryModal
        isOpen={isGiftModalOpen}
        onClose={handleCloseGiftModal}
        item={selectedItem}
      />

      {/* OG Account Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </main>
  );
};

export default Index;
