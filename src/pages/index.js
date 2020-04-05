import React from "react"

import { Container } from './styles';

import GlobalStyle from '../styles/global';


import Header from '../components/Header';
import Footer from '../components/Footer'; 

import segImage from '../assets/imageIndex01.png';
import depImage from '../assets/depositions.jpg';

export default function Index() {
  return(
    <Container>
      <GlobalStyle />
      <Header />
      <div class="container">
        <div class="main">
          <section> 
            <h1>ESM Consultoria</h1>
            <h2>Experiência em treinamentos moldado para seu negócio.</h2>
            <h3><strong>Treinamentos de segurança do trabalho à distancia. </strong></h3>
            <h3>Instrutores treinados e prontos para te atender.</h3>
          </section>
        </div>
        <section>
          <div class="description">
              <div class="desc">
                <h1>Quem Somos?</h1>
                <p>
                  Somos uma <strong>empresa de treinamento em segurança do trabalho</strong> que está no mercado a <strong>mais de 15 anos trabalhando "in company"</strong>, já treinamos nas mais variadas áreas da segurança do trabalho e em diversas empresas tais como:
                  Souza Cruz, Cadence, CELESC, Petrobrás entre outras.
                </p>
                <a href="/about">Conte-nos mais</a>
              </div>            
              <div class="desc">
                <img src={segImage} alt="imagem" />
              </div>           
          </div>
        </section>
        <div class="depositions">
          <h1>Depoimentos</h1>
          <img src={depImage} alt="Depoimentos" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis, enim sit amet suscipit pretium, felis arcu maximus nibh, ac facilisis libero erat ut dolor</p>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

