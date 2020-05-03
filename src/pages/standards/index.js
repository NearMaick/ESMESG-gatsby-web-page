import React from 'react';
import Helmet from 'react-helmet';

import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default function () {
  return (
    <Container>
      <Helmet title="ESM Consultoria" />
      <GlobalStyle />
      <Header />
      <div className="container">
        <div className="head">
          <header>
            <h1>Normas Regulamentares</h1>
          </header>
          <nav>
            <a href="#nr05">05</a>
            <a href="#nr06">06</a>
            <a href="#nr10">10</a>
            <a href="#nr11">11</a>
            <a href="#nr12">12</a>
            <a href="#nr13">13</a>
            <a href="#nr17">17</a>
            <a href="#nr18">18</a>
            <a href="#nr23">23</a>
            <a href="#nr29">29</a>
            <a href="#nr30">30</a>
            <a href="#nr31">31</a>
            <a href="#nr32">32</a>
            <a href="#nr33">33</a>
            <a href="#nr34">34</a>
            <a href="#nr35">35</a>
          </nav>
        </div>

        <div className="sections">
          <section id="nr05">
            <h1>Norma Regulamentar 05</h1>
            <h2>NR 05 – CIPA (Comissão interna de prevenção de acidentes)</h2>
            <div className="text">
              <div className="partone">
                <p>
                  Este curso tem como intuito instruir a importância, normas,
                  rotinas e a busca de prevenção de acidentes e doenças
                  decorrentes do ambiente de trabalho. Instruindo também quais
                  são as competências e como utilizar as atribuições da CIPA,
                  sempre mostrando a suas atuações e a busca contínua de
                  identificar os riscos ambientais.
                </p>
                <h3>Carga horária mínima: 20 horas.</h3>
                <a href="#top">Voltar ao topo</a>
              </div>
              <div className="parttwo">
                <h3>Conteúdo Programático</h3>
                <ul>
                  <li>Atribuições dos cipeiros;</li>
                  <li>Atuação dos membros da cipa;</li>
                  <li>Organização da cipa;</li>
                  <li>Riscos ambientais;</li>
                  <li>Mapa de riscos;</li>
                  <li>Inspeção de segurança;</li>
                  <li>EPI – Equipamento de Proteção Individual;</li>
                  <li>Noções de prevenção e combate a incêndio;</li>
                  <li>Acidente do trabalho;</li>
                  <li>Conseqüências dos acidentes;</li>
                  <li>Tipos de acidentes;</li>
                  <li>Causas dos acidentes;</li>
                  <li>CAT – Comunicação do Acidente de Trabalho;</li>
                  <li>Benefícios previdenciários para o acidentado;</li>
                  <li>Investigação dos acidentes;</li>
                  <li>Noções sobre aids;</li>
                  <li>Campanhas de segurança;</li>
                  <li>Reunião da cipa - como se realiza.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="nr06">
            <h1>Norma Regulamentar 06</h1>
            <h2>NR 06 – EPI (Equipamento de proteção individual)</h2>
            <div className="text">
              <div className="partone">
                <p>
                  Este curso tem como intuito instruir as normas técnicas,
                  ressaltar a importância, identificação, manutenção e ciclo de
                  vida geral dos equipamentos de proteção individuais.
                </p>
                <h3>Carga horária mínima: 4 horas.</h3>
                <a href="#top">Voltar ao topo</a>
              </div>
              <div className="parttwo">
                <h3>Conteúdo Programático</h3>
                <ul>
                  <li>Conceitos e Definições;</li>
                  <li>Certificado de Aprovação – CA;</li>
                  <li>Responsabilidades e Competências;</li>
                  <li>Tipos de EPI;</li>
                  <li>EPI para Proteção da Cabeça;</li>
                  <li>EPI para Proteção dos Olhos e Face;</li>
                  <li>EPI para Proteção Auditiva;</li>
                  <li>EPI para Proteção Respiratória;</li>
                  <li>EPI para proteção do Tronco;</li>
                  <li>EPI para Proteção dos Membros Superiores;</li>
                  <li>EPI para Proteção dos Membros Inferiores;</li>
                  <li>EPI para Proteção do Corpo Inteiro;</li>
                  <li>
                    EPI para Proteção Contra Quedas com Diferença de Nível.
                  </li>
                  <li>Validade do EPI;</li>
                  <li>Manutenção, Conservação e Limpeza.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="nr10">
            <h1>Norma Regulamentar 10</h1>
            <h2>NR 10 – Segurança em instalações elétricas</h2>
            <div className="text">
              <div className="partone">
                <p>
                  Este curso tem como intuito instruir e capacitar para normas
                  técnicas visando os indivíduos que iram trabalhar direta ou
                  indiretamente com instalações e serviços elétricos quer seja
                  em nível industrial ou comercial.
                </p>
                <h3>Carga horária mínima: 40 horas.</h3>
                <a href="#top">Voltar ao topo</a>
              </div>
              <div className="parttwo">
                <h3>Conteúdo Programático</h3>
                <ul>
                  <li>Apresentação da Norma NR 10;</li>
                  <li>Introdução à Eletricidade;</li>
                  <li>
                    Energia Elétrica - Geração, Transmissão e Distribuição;
                  </li>
                  <li>
                    Atividades de Manutenção e Inspeção na Geração, Transmissão
                    e Distribuição;
                  </li>
                  <li>
                    Riscos em Instalações e Serviços com Eletricidade - Choque
                    Elétrico;
                  </li>
                  <li>Tipos de Choques Elétricos;</li>
                  <li>Efeitos do Choque Elétrico - Contrações Musculares;</li>
                  <li>Efeitos do Choque Elétrico - Queimaduras;</li>
                  <li>Causas Determinantes de Choques Elétricos;</li>
                  <li>Os Perigos do Arco Elétrico;</li>
                  <li>Campos Eletromagnéticos;</li>
                  <li>Outros Perigos e Riscos de Ambiente;</li>
                  <li>Causas Diretas de Acidentes com Eletricidade;</li>
                  <li>Causas Indiretas de Acidentes com Eletricidade;</li>
                  <li>Medidas de Controle do Risco Elétrico - MCRE;</li>
                  <li>MCRE - Desenergização;</li>
                  <li>
                    MCRE - Aterramento Funcional, de Proteção e Temporário (TN /
                    TT / IT);
                  </li>
                  <li>MCRE - Equipotencialização;</li>
                  <li>MCRE - Seccionamento Automático da Alimentação;</li>
                  <li>
                    MCRE - Dispositivo de proteção a corrente
                    diferencial-residual –DR;
                  </li>
                  <li>MCRE - Proteção por Extrabaixa Tensão: SELV E PELV;</li>
                  <li>MCRE - Barreiras e Invólucros;</li>
                  <li>MCRE - Bloqueios e Impedimentos;</li>
                  <li>MCRE - Isolamento;</li>
                  <li>
                    MCRE - Proteção por Colocação Fora de Alcance e Separação
                    Elétrica;
                  </li>
                  <li>
                    Equipamentos de Proteção Coletiva e Individual (EPC/EPI);
                  </li>
                  <li>
                    Primeiros Socorros em Caso de Acidente com Eletricidade;
                  </li>
                  <li>Documentação de Instalações Elétricas;</li>
                  <li>Normas ABNT sobre Instalações Elétricas.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="nr11">
            <h1>Norma Regulamentar 11</h1>
            <h2>
              NR 11 - Segurança para transporte, armazenamento, movimentação e
              manuseio de materiais
            </h2>
            <div className="text">
              <div className="partone">
                <p>
                  Este curso tem como intuito instruir e capacitar para normas
                  técnicas visando os indivíduos que iram trabalhar direta ou
                  indiretamente com transporte, armazenamento, movimentação e
                  manuseio de materiais, buscando apresentar seus riscos,
                  prevenções e condições de trabalho.
                </p>
                <h3>Carga horária mínima: 16 horas.</h3>
                <a href="#top">Voltar ao topo</a>
              </div>
              <div className="parttwo">
                <h3>Conteúdo Programático</h3>
                <ul>
                  <li>Normas Técnicas;</li>
                  <li>Amarrações;</li>
                  <li>Acessórios;</li>
                  <li>Tipos de EPI;</li>
                  <li>Cabos de aço;</li>
                  <li>Capacidade de Carga;</li>
                  <li>Utilização e Segurança do Equipamento;</li>
                  <li>Operacionalização do Equipamento;</li>
                  <li>Simulação Prática;</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="nr12">
            <h1>Norma Regulamentar 12</h1>
            <h2>NR 12 - Segurança de trabalho em máquinas e equipamentos</h2>
            <div className="text">
              <div className="partone">
                <p>
                  Este curso tem como intuito instruir e capacitar para normas
                  técnicas visando os indivíduos que iram trabalhar direta ou
                  indiretamente com máquinas e equipamentos, buscando apresentar
                  seus riscos, manutenções, prevenções, manuseios e condições de
                  trabalho.
                </p>
                <h3>Carga horária mínima: 16 horas.</h3>
                <a href="#top">Voltar ao topo</a>
              </div>
              <div className="parttwo">
                <h3>Conteúdo Programático</h3>
                <ul>
                  <li>Normas Técnicas;</li>
                  <li>
                    Descrição, identificação dos riscos associados com máquinas
                    e equipamentos;
                  </li>
                  <li>Funcionamento dos equipamento de proteção;</li>
                  <li>Princípios de segurança;</li>
                  <li>
                    Segurança para riscos mecânicos, elétricos e outros
                    relevantes;
                  </li>
                  <li>Método de trabalho seguro;</li>
                  <li>Utilização e Segurança do Equipamento;</li>
                  <li>Operacionalização do Equipamento;</li>
                  <li>Permissão de trabalho;</li>
                  <li>Sistemas de bloqueio durante operações;</li>
                  <li>Simulação Prática;</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
