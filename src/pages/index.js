import React from "react"

import GlobalStyle from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';

import segImage from '../assets/imageSeg.jpg';

export default function () {
  return(
    <>
      <GlobalStyle />
      <Header />
        <div class="main">
          <section>
            <h1>ESM Consultoria</h1>
            <h2>Experiência em treinamentos moldado para seu negócio.</h2>
            <h3><strong>Treinamentos de segurança do trabalho à distancia. </strong></h3>
            <h3>Instrutores treinados e prontos para te atender.</h3>
          </section>
        </div>
        <div class="description">
          <section>
            <h1>Quem Somos?</h1>
            <p>
              Somos uma <strong>empresa de treinamento em segurança do trabalho</strong> que está no mercado a <strong>mais de 15 anos trabalhando "in company"</strong>, já treinamos nas mais variadas áreas da segurança do trabalho e em diversas empresas tias como:
              Souza Cruz, Cadence, CELESC, Petrobrás entre outras.
            </p>
            <a href="/about">Conte-nos mais</a>
          </section>
        </div>
      <Footer />
    </>
  );
}

