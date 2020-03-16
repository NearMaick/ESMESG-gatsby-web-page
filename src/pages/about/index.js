import React from 'react';

import { Container } from './styles';

import GlobalStyle from '../../styles/global';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <h1>hello world</h1>
      <Footer />
    </Container>
  );
}
