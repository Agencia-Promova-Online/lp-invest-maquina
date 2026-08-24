import React, { useState } from 'react';
import { MessageCircle, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Webhook para capturar o lead do WhatsApp
      const webhookUrl = 'https://n8n.srv693523.hstgr.cloud/webhook/8bfb0b37-3429-42fe-abe1-31a98fa82728';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          telefone: formData.phone,
          origem: 'WhatsApp Button - Maquinario',
          timestamp: new Date().toISOString(),
          tipo_conversao: 'forms whatsapp Maquinario'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Aguarda 1 segundo e redireciona para WhatsApp
        setTimeout(() => {
          const message = `Olá! Meu nome é ${formData.name}. Tenho interesse no consórcio de maquinário. Vim através do forms whatsapp Maquinario.`;
          const whatsappUrl = `https://wa.me/556195584279?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
          onClose();
          setFormData({ name: '', phone: '' });
          setSubmitStatus('idle');
        }, 1500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário WhatsApp:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header border-0 pb-0">
            <div className="d-flex align-items-center">
              <div className="bg-success rounded-circle p-2 me-3">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h5 className="modal-title fw-bold text-gray-800 mb-0">
                  Falar no WhatsApp
                </h5>
                <p className="small text-muted mb-0">
                  Preencha seus dados para iniciar a conversa
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              disabled={isSubmitting}
            ></button>
          </div>
          
          <div className="modal-body pt-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="whatsapp-name" className="form-label fw-medium">
                  Nome completo *
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="whatsapp-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Digite seu nome completo"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="whatsapp-phone" className="form-label fw-medium">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="whatsapp-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+00 (11) 99999-9999"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="d-grid">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-success btn-lg fw-semibold d-flex align-items-center justify-content-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="me-2" />
                      <span>Continuar no WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {submitStatus === 'success' && (
              <div className="alert alert-success d-flex align-items-center mt-3 mb-0" role="alert">
                <CheckCircle className="me-3" size={20} />
                <div>
                  <strong>Sucesso!</strong> Redirecionando para o WhatsApp...
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-danger d-flex align-items-center mt-3 mb-0" role="alert">
                <AlertCircle className="me-3" size={20} />
                <div>
                  Ocorreu um erro. Tente novamente ou entre em contato diretamente.
                </div>
              </div>
            )}
          </div>
          
          <div className="modal-footer border-0 pt-0">
            <p className="small text-muted text-center w-100 mb-0">
              <MessageCircle size={16} className="me-1" />
              Seus dados são seguros e serão usados apenas para contato
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;
