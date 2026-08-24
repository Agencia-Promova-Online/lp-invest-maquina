import { CheckCircle, MessageCircle, Home } from 'lucide-react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Obrigado() {
  useEffect(() => {
    const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({
      event: 'lead_submit_success',
      page_type: 'obrigado',
      page_path: window.location.pathname,
      page_title: 'Obrigado',
      timestamp: new Date().toISOString(),
    });
  }, []);
  return (
    <div className="font-sans">
      <Header />
      <main>
        <section className="bg-light-custom min-vh-100 d-flex align-items-center">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 text-center">
                  <div className="step-icon mb-4 mx-auto d-flex align-items-center justify-content-center">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h1 className="display-6 fw-bold text-gray-800 mb-3">
                    Obrigado! Recebemos seus dados
                  </h1>
                  <p className="fs-5 text-gray-600 mb-4">
                    Em breve, um de nossos vendedores entrará em contato com você por WhatsApp ou e-mail para dar sequência no atendimento.
                  </p>

                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
                    <a
                      href="https://wa.me/556195584279?text=Olá%2C+acabei+de+enviar+meus+dados+na+landing+page+e+gostaria+de+seguir+com+o+atendimento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg px-4 d-inline-flex align-items-center justify-content-center"
                    >
                      <MessageCircle size={20} className="me-2" />
                      Falar no WhatsApp agora
                    </a>
                    <a
                      href="/"
                      className="btn btn-outline-primary btn-lg px-4 d-inline-flex align-items-center justify-content-center"
                    >
                      <Home size={20} className="me-2" />
                      Voltar ao início
                    </a>
                  </div>

                  <div className="mt-4">
                    <p className="small text-gray-600 mb-0">
                      Horário de atendimento: Seg a Sex, 9h–18h (BRT)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
