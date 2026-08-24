import { Users, Award, Headphones } from 'lucide-react';
import EquipeImg from '../assets/Maquinas/foto-alpha.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Suporte personalizado para brasileiros no exterior, com atendimento em português e compreensão das suas necessidades específicas'
    },
    {
      icon: Award,
      title: 'Segurança e conformidade',
      description: 'Atuação dentro das normas e regulamentos vigentes para proteger você, garantindo total segurança nas suas operações'
    },
    {
      icon: Headphones,
      title: 'Suporte Completo',
      description: 'Acompanhamento desde a análise inicial até a entrega do seu maquinário, com consultoria especializada'
    }
  ];

  return (
    <section className="pb-5 " data-aos="fade-up"
      data-aos-duration="1000">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gray-800 mb-4">
            Por que escolher a Invest Intermediação?
          </h2>
          <p className="fs-5 text-gray-600 mx-auto" style={{ maxWidth: '600px' }}>
            A Invest Intermediação é especialista em atender brasileiros no exterior, com experiência
            e credibilidade no mercado de investimentos.
          </p>
          Somos referência em soluções inteligentes para brasileiros que desejam adquirir bens no Brasil de forma segura e legal.
          <p></p>
        </div>

        <div className="row g-4">
          <div className="col-12 mb-4">
            <div className="parallax-container rounded-4 mb-5 ">

              <div className='position-relative'>
                <img
                  src={EquipeImg}
                  className='img-fluid rounded-3'
                  alt="Nossa Equipe"
                  loading="lazy"
                  decoding="async"
                />

                {/* Adicione d-none para ocultar em telas extra pequenas (mobile) e d-md-block para exibir a partir de telas médias (md) */}
                <div className="position-absolute top-0 w-100 d-none d-md-block">
                  <div className="d-flex justify-content-center align-items-start h-100">
                    <div className="machinery-card rounded-4 p-4 text-dark text-center" style={{ marginTop: '20px' }}>
                      <h3 className="display-6 fw-bold mb-3">Nossa Equipe</h3>
                      <p className="fs-5 mb-0">Qualidade Garantida em Atendimento</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {reasons.map((reason, index) => (
            <div key={index} className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="benefit-icon bg-primary" style={{ backgroundColor: '#dbeafe !important' }}>
                    <reason.icon size={32} className="text-primary-custom" />
                  </div>
                  <h3 className="fs-4 fw-semibold text-gray-800 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 mb-0 lh-base">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
