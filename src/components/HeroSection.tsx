import { ArrowRight, Globe, TrendingUp } from 'lucide-react';
import maquinaHero from '../assets/Maquinas/maquina 01.png';

const HeroSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex align-items-center mb-4 text-primary-custom">
              <Globe size={20} className="me-2" />
              <span className="small fw-medium">Para brasileiros no exterior</span>
            </div>
            
            <h1 className="display-4 fw-bold text-gray-800 mb-4">
              Invista no Brasil mesmo
              <span className="text-primary-custom"> morando fora</span>
            </h1>
            
            <p className="fs-5 text-gray-600 mb-5 lh-base">
              Conquiste seu maquinário agrícola ou de construção civil com total segurança e suporte especializado para brasileiros residentes
              no exterior.
            </p>
            
            <div className="d-flex flex-column flex-sm-row align-items-start">
              <button
                onClick={scrollToForm}
                className="btn btn-primary btn-lg px-4 py-3 fw-semibold mb-3 mb-sm-0 me-sm-4 d-flex align-items-center"
              >
                <span>Quero entender como funciona</span>
                <ArrowRight size={20} className="ms-2" />
              </button>
              
              <div className="d-flex align-items-center text-gray-600">
                <TrendingUp size={20} className="text-success me-2" />
                <span className="small">Sem juros abusivos • Legalizado • Flexível</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative caterpillar-3d caterpillar-floating">
              <img
                src={maquinaHero}
                alt="Escavadeira Caterpillar em ação"
                className="img-fluid rounded-4 position-relative"
                style={{ height: '450px', width: '100%', objectFit: 'contain', }}
              />
              <div className="position-absolute bottom-0 start-0 p-3">
                <div className="bg-warning text-dark px-3 py-2 rounded-3 fw-bold small">
                  <i className="fas fa-star me-1"></i>
                  Caterpillar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
