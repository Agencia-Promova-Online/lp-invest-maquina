import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import WhatsAppModal from './WhatsAppModal';
import logoInvest from '../assets/logo/icon-invest.png';

export default function Header() {
  const [showWhatsAppModal, setShowWhatsAppModal] = React.useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsAppModal(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
      <div className="container">
        <a className="navbar-brand navbar-brand-custom" href="#">
          <div className="brand-logo">
            <span className="text-white fw-bold fs-5"><img src={logoInvest} height={36}/></span>
          </div>
          <div>
            <h1 className="fs-5 fw-bold mb-0">Invest Intermediação</h1>
            <p className="small text-muted mb-0">Investimento em Maquinário</p>
          </div>
        </a>
        
        <div className="d-none d-md-flex align-items-center">
          <a 
            href="tel:+556195584279" 
            className="text-decoration-none text-gray-600 me-4 d-flex align-items-center"
          >
            <Phone size={18} className="me-2" />
            <span>+55 61 9558-4279</span>
            <button
              onClick={handleWhatsAppClick}
            rel="noopener noreferrer"
            className="btn btn-success d-flex align-items-center ms-3"
          > <span className='mx-1'> WhatsApp</span>
            <MessageCircle size={18} className="me-2" />
            </button>
          </a>
        </div>
      </div>
      </nav>
      
      <WhatsAppModal 
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </>
  );
};
