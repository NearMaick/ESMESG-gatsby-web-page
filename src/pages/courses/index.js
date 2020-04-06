import React from 'react';

import { Container } from './styles';

import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Courses() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <h1>Cursos</h1>
      <section>
        <h2>NR 05 – CIPA (Comissão interna de prevenção de acidentes)</h2>
        <p>
          Este curso tem como intuito instruir a importância, normas, rotinas e
          a busca de prevenção de acidentes e doenças decorrentes do ambiente de
          trabalho. Instruindo também quais são as competências e como utilizar
          as atribuições da CIPA, sempre mostrando a suas atuações e a busca
          contínua de identificar os riscos ambientais.
        </p>
        <h2>Conteúdo Programático</h2>
        <ul>
          <li>ATRIBUIÇÕES DOS CIPEIROS;</li>
        </ul>
        <h2>Carga horária mínima: 20 horas.</h2>
      </section>
      <section>
        <h2>NR 10 – Segurança em instalações elétricas</h2>
        <p>
          Este curso tem como intuito instruir e capacitar para normas técnicas
          visando os indivíduos que iram trabalhar direta ou indiretamente com
          instalações e serviços elétricos quer seja em nível industrial ou
          comercial.
        </p>
        <h2>Conteúdo Programático</h2>
        <ul>
          <li>Normas ABNT sobre Instalações Elétricas.</li>
        </ul>
        <h2>Carga horária mínima: 40 horas.</h2>
      </section>
      <Footer />
    </Container>
  );
}
