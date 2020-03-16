import React from 'react';
import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="ESM Treinamentos" />
          <a href="/">Home</a>
          <a href="/standards">Treinamentos</a> 
          <a href="#none">Laudos</a>       
          <a href="#none">Consultoria</a> 
          <a href="/about">Empresa</a>
          <a href="#none">Noticias</a> 
          <a href="#none">Contato</a>
          <a href="#none">EAD</a>   
        </nav>
      </Content>
    </Container>
  );
}
