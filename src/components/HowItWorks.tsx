import { CreditCard, Trophy, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: 'Análise de Perfil',
      description: 'Realizamos um contato inicial para entender suas metas e traçar a melhor estratégia.'
    },
    {
      icon: Trophy,
      title: 'Propostas',
      description: 'Apresentamos diferentes cenários e condições para encontrar parcelas que caibam no seu planejamento financeiro.'
    },
    {
      icon: CheckCircle,
      title: 'Conclusão',
      description: 'Liberação da sua carta de crédito e suporte para aquisição do maquinário.'
    }
  ];

  return (
    <section className="py-5 bg-white" data-aos="fade-up"
    data-aos-duration="3000">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gray-800 mb-4">
            Como funciona?
          </h2>
          <p className="fs-5 text-gray-600 mx-auto" style={{ maxWidth: '600px' }}>
            Processo simples e transparente em apenas 3 passos
          </p>
        </div>
        
        <div className="row g-4">
          {/* <div className="col-12 mb-5">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="caterpillar-3d">
                  <img
                    src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Trator Caterpillar trabalhando"
                    className="img-fluid rounded-4"
                    style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="caterpillar-3d">
                  <img
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Caminhão Caterpillar em construção"
                    className="img-fluid rounded-4"
                    style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div> */}
          
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4">
              <div className="step-card">
                <div className="step-icon">
                  <step.icon size={32} className="text-white" />
                  <div className="step-number">
                    {index + 1}
                  </div>
                </div>
                <h3 className="fs-4 fw-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 lh-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;