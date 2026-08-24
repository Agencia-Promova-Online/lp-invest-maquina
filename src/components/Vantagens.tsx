import colheitadeiraSoja from '../assets/Maquinas/colheitadesoja.jpg';
import caterpillarCivil from '../assets/Maquinas/Caterpillar-civil.webp';
import camiaoECat from '../assets/Maquinas/camiaoecat.webp';

export default function Vantagens() {
    return (
        <>
            <section className="py-5" data-aos="fade-up"
     data-aos-duration="3000">

                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-gray-800 mb-4">
                    Por que investir em maquinário no Brasil?
                    </h2>
                    <p className="fs-5 text-gray-600 mx-auto" style={{ maxWidth: '700px' }}>
                    Alta demanda no agro e construção civil. Mais valorização garantida!
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-12 mb-4">

                        <div className="machinery-showcase py-4 px-5">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-4">
                                    <div className="card caterpillar-3d">
                                        <img
                                            src={colheitadeiraSoja}
                                            alt="colheitadeira de soja"
                                            className="card-img-top img-fluid rounded-3"
                                            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h1 className="display-6">Brasil bate novo recorde nas exportações agrícolas </h1>
                                            </div>
                                            <div className="card-subtitle">
                                                <small className="text-secondary">Crescimento nas exportações agrícolas</small>
                                            </div>
                                            <div className="card-text">
                                                <p>O agronegócio brasileiro alcançou um novo patamar em 2024, com um crescimento de 6,6% nas exportações no 1º semestre. Soja, milho, café e carne estão entre os principais produtos enviados ao exterior, consolidando o Brasil como um dos maiores exportadores do mundo.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small>Fonte: MAPA (Ministério da Agricultura e Pecuária)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card caterpillar-3d">
                                        <img
                                            src={caterpillarCivil}
                                            alt="Escavadeira Caterpillar"
                                            className="card-img-top img-fluid rounded-3"
                                            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h1 className="display-6">Construção civil vive novo ciclo de crescimento </h1>
                                            </div>
                                            <div className="card-subtitle">
                                                <small className="text-secondary">PIB da construção cresce quase 7% em 2023</small>
                                            </div>
                                            <div className="card-text">
                                                <p>O setor da construção civil segue em alta, com um crescimento de 6,9% no PIB em 2023. O número é impulsionado por obras de infraestrutura, programas habitacionais e a demanda constante por imóveis em todo o país.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small>Fonte: CBIC – Câmara Brasileira da Indústria da Construção</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card caterpillar-3d">
                                        <img
                                            src={camiaoECat}
                                            alt="Escavadeira Caterpillar"
                                            className="card-img-top img-fluid rounded-3"
                                            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h1 className="display-6">Obras e infraestrutura impulsionam demanda por máquinas </h1>
                                            </div>
                                            <div className="card-subtitle">
                                                <small className="text-secondary">Construtoras enfrentam escassez de equipamentos</small>
                                            </div>
                                            <div className="card-text">
                                                <p>Com o avanço de obras públicas e privadas, empresas da construção pesada relatam falta de equipamentos como retroescavadeiras, motoniveladoras e caminhões. Isso eleva a procura por maquinário e torna o setor cada vez mais atrativo para investidores.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small>Fonte: Notícias do setor via CBIC, InfraROI e Exame</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
