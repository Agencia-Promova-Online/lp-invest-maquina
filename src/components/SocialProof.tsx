import { Users, Star, Shield, TrendingUp } from 'lucide-react';
import TestimonialsCarousel from './TestimonialsCarousel';

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      number: '5,000+',
      label: 'Clientes Atendidos'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Avaliação Média'
    },
    {
      icon: Shield,
      number: '15+',
      label: 'Anos de Experiência'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Taxa de Aprovação'
    }
  ];

  return (
    <section className="py-5 social-proof-bg" data-aos="fade-up"
    data-aos-duration="3000">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-4">
            Confiança que você pode sentir
          </h2>
          <p className="fs-5 text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            Milhares de brasileiros no exterior já realizaram o sonho do maquinário próprio
          </p>
        </div>
        
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="display-6 fw-bold text-white mb-2">{stat.number}</div>
                <div className="text-white-50">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          {/* <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <div className="caterpillar-3d">
                <img
                  src="/src/assets/Maquinas/maquinas-pesadas-utilizadas-na-industria-da-construcao-e-na-engenharia.jpg"
                  alt="Frota de máquinas Caterpillar"
                  className="img-fluid rounded-4"
                  style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
         
          <blockquote className="fs-4 text-white fst-italic mx-auto mb-4" style={{ maxWidth: '800px' }}>
            "Só tenho a agradecer à equipe da Invest, em especial ao César, que sempre nos atendeu com muita dedicação e clareza. Já temos duas máquinas com a empresa e em todas as etapas recebemos suporte completo, desde o faturamento até o envio das parcelas sempre com antecedência. Em um mundo onde é cada vez mais difícil confiar, encontrar uma empresa séria, transparente e comprometida como a Invest é realmente raro. Por isso, afirmo com tranquilidade: sempre compraremos com vocês. Gratidão a toda equipe!"
          </blockquote>
          <div className="text-white-50">
            <div className="fw-semibold">— luceliah</div>
            <div className="small">Engenheiro Civil - Miami, EUA</div>
          </div> */}
        </div>
      </div>
     <TestimonialsCarousel/>

    </section>
  );
};

export default SocialProof;
