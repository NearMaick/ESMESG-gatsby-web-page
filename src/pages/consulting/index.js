import React from 'react';

import { Container } from './styles';

import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import image01 from '../../assets/consulting01.png';
import image02 from '../../assets/consulting02.png';
import image03 from '../../assets/consulting03.png';

export default function Consulting() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <div className="consulting">
        <div className="text">
          <h1>Consultoria</h1>
          <p>
            Com dificuldades nas normas técnicas? Não sabe por onde começar ou
            acabar? Ligue e marque já um orçamento, sempre estaremos com
            profissionais prontos para buscar a melhor solução para você.
          </p>
          <h1>Palestras</h1>
          <p>
            Está tendo problemas em conseguir passar as diretrizes de segurança
            para os seus funcionários sem ser maçante? Estamos prontos para
            auxiliá-los, com profissionais especializados e prontos para passar
            o conhecimento de maneira focada e diferente. Ligue e marque já um
            orçamento.
          </p>
        </div>
        <img src={image02} alt="Consultoria" />
      </div>

      <div className="consulting">
        <div className="text">
          <h1>SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho)</h1>
          <p>
            Precisa fazer a semana de prevenção? Estamos prontos para auxílio
            com uma das melhores equipes para passar de uma maneira diferente a
            segurança de trabalho para seus colaboradores. Ligue e marque já um
            orçamento.{' '}
          </p>
        </div>
        <img src={image03} alt="Consultoria" />
      </div>

      <div className="consulting">
        <div className="text">
          <h1>Plano de Evacuação e abandono de área</h1>
          <p>
            Necessita fazer um plano de evacuação para sua indústria ou
            complexo? Nossa equipe está pronta para auxiliar sua empresa a criar
            o plano de evacuação que melhor se adequa a você, marque uma visita
            já para podermos planejar.
          </p>
        </div>

        <img src={image01} alt="Consultoria" />
      </div>

      <Footer />
    </Container>
  );
}
