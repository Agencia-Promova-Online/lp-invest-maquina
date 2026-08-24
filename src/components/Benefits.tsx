import React from 'react';
import { DollarSign, Shield, Clock, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Sem Juros',
      description: 'Pague apenas uma taxa de administração, sem juros abusivos de financiamento tradicional'
    },
    {
      icon: Shield,
      title: 'Totalmente Legalizado',
      description: 'Atuação dentro das normas, com total segurança jurídica'
    },
    {
      icon: Clock,
      title: 'Flexibilidade',
      description: 'Escolha o valor das parcelas que cabem no seu orçamento'
    },
    {
      icon: CheckCircle,
      title: 'Garantia',
      description: 'Processo transparente com acompanhamento completo do início ao fim'
    }
  ];

  return (
    <section className="py-5 bg-white" data-aos="fade-up"
    data-aos-duration="3000">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gray-800 mb-4">
            Invista no Brasil com inteligência e segurança
          </h2>
          <p className="fs-5 text-gray-600 mx-auto" style={{ maxWidth: '600px' }}>
            Tenha um patrimônio sólido, que valoriza com o tempo e pode gerar retorno imediato.
          </p>
        </div>

        <div >
          <div className='row g-4'>         {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon size={28} className="text-primary-custom" />
                </div>
                <h3 className="fs-5 fw-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-0">{benefit.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;