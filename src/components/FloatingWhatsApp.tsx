import React from 'react';
import { MessageCircle } from 'lucide-react';
import WhatsAppModal from './WhatsAppModal';

const FloatingWhatsApp = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = React.useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsAppModal(true);
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="floating-whatsapp d-flex align-items-center justify-content-center"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
      
      <WhatsAppModal 
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </>
  );
};

export default FloatingWhatsApp;