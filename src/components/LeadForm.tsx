import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    prefix: '+55'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const navigate = useNavigate();

  const countries = [
    'Estados Unidos', 'Canadá', 'Reino Unido', 'Alemanha', 'França',
    'Itália', 'Espanha', 'Portugal', 'Japão', 'Austrália', 'Outro'
  ];

  const prefixes = ['+55', '+1', '+44', '+33', '+49', '+81', '+61'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const cleanPhone = formData.whatsapp.replace(/\D/g, '');
      const fullPhone = formData.prefix + cleanPhone;

      const webhookUrl = 'https://n8n.promovaonline.com.br/webhook/8bfb0b37-3429-42fe-abe1-31a98fa82728';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          whatsapp: fullPhone,
          pais: formData.country,
          timestamp: new Date().toISOString(),
          origem: 'Landing Page Invest Intermediação'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', whatsapp: '', country: '', prefix: '+55' });
        navigate('/obrigado');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-5 bg-light-custom" data-aos="fade-up" data-aos-duration="3000">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-gray-800 mb-4">
                Pronto para investir no seu futuro?
              </h2>
              <p className="fs-5 text-gray-600">
                Preencha o formulário e receba uma consultoria personalizada sobre maquinário
              </p>
            </div>

            <div className="card border-0 shadow-lg">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-medium">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-medium">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-3">
                      <label htmlFor="prefix" className="form-label fw-medium">
                        Prefixo *
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="prefix"
                        name="prefix"
                        value={formData.prefix}
                        onChange={handleInputChange}
                        required
                      >
                        {prefixes.map(pref => (
                          <option key={pref} value={pref}>{pref}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="whatsapp" className="form-label fw-medium">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label fw-medium">
                        País onde reside *
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Selecione o país</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg px-5 py-3 fw-semibold d-inline-flex align-items-center"
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
                          <span>Quero receber consultoria gratuita</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {submitStatus === 'success' && (
                  <div className="alert alert-success d-flex align-items-center mt-4" role="alert">
                    <CheckCircle className="me-3" size={20} />
                    <div>
                      Obrigado! Sua solicitação foi enviada com sucesso. Entraremos em contato em breve!
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger d-flex align-items-center mt-4" role="alert">
                    <AlertCircle className="me-3" size={20} />
                    <div>
                      Ocorreu um erro ao enviar sua solicitação. Tente novamente ou entre em contato via WhatsApp.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
