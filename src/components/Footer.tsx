import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logoInvest from '../assets/logo/icon-invest.png';

const Footer = () => {
  return (
    <footer className="footer-bg py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <div className="brand-logo me-3">
              <img src={logoInvest} height={40}/>
                {/* <span className="text-white fw-bold fs-5">I</span> */}
              </div>
              <div>
                <h3 className="fs-5 fw-bold text-white mb-0">Invest Intermediação</h3>
                <p className="text-muted small mb-0">Especializada em Investimentos</p>
              </div>
            </div>
            
            <p className="text-light mb-4 lh-base">
              Especializada em maquinário agrícola e de construção civil para brasileiros investidores residentes 
              no exterior. 
            </p>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-2">
                <Phone size={18} className="text-info me-3" />
                <span className="text-light">+55 61 9558-4279</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Mail size={18} className="text-info me-3" />
                <span className="text-light">investintermediacoes563@gmail.com</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={18} className="text-info me-3" />
                <span className="text-light">Taguatinga, DF - Brasil</span>
              </div>
            </div>
          </div>
          
          {/* <div className="col-lg-3">
            <h4 className="fs-6 fw-semibold text-white mb-3">Links Úteis</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Como funciona</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Vantagens</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Simulador</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">FAQ</a>
              </li>
            </ul>
          </div> */}
          
          <div className="col-lg-3">
            <h4 className="fs-6 fw-semibold text-white mb-3">Redes Sociais</h4>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61578001446200#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/invest_intermediacao?igsh=N3JrdmZiYjlvYzU1" target="_blank" className="social-icon">
                <Instagram size={20} />
              </a>
             
            </div>
            
          </div>
          <p className='text-center'style={{fontSize:"11px",}}>A Invest Intermediação de Negócios LTDA não é uma instituição financeira e não realiza operações de crédito, financiamentos ou promessas de retorno financeiro direto. Atuamos como empresa de intermediação, conectando clientes a oportunidades no mercado de maquinário agrícola, maquinários para construção civil e caminhões, além de prestar assessoria em processos de aquisição desses bens no Brasil.

Estamos regularmente inscritos no CNPJ nº 41.818.673/0001-30 e operamos com foco na transparência, legalidade e conformidade com a legislação brasileira vigente. Toda comunicação, simulações e atendimentos têm caráter exclusivamente informativo, baseando-se em dados públicos ou fornecidos por parceiros autorizados.

A Invest Intermediação não garante aprovação de crédito, subsídios ou condições financeiras específicas — cada proposta é avaliada de forma independente pelas instituições ou empresas envolvidas no processo. Nosso compromisso é atuar com ética, respeito ao consumidor e clareza nas informações apresentadas.

Copyright © 2025. Invest Intermediação de Negócios LTDA. Todos os direitos reservados. Nos isentamos de responsabilidade por falhas técnicas ou operacionais decorrentes de serviços de terceiros, como instabilidade em redes ou plataformas externas. A navegação e o envio de informações em nossos canais estão sujeitos às limitações técnicas da internet.</p>
            
        </div>
        
        <hr className="border-secondary my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-primary small">
              <p className="mb-1">CNPJ: 41.818.673/0001-30</p>
             
             <p className="mb-0">© 2025 INVEST INTERMEDIAÇÃO DE NEGÓCIOS LTDA. Todos os direitos reservados.</p>
            </div>
           
          </div>
          
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end gap-4 small ">
              <a href="/termos-politica-de-privacidade" className="text-primary text-decoration-none">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
