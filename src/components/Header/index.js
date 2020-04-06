import React from 'react';
import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav className="menu">
          <img src={logo} alt="ESM Treinamentos" />

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#none">Treinamentos</a>
              <ul>
                <li>
                  <a href="/standards">Normas Regulamentares</a>
                </li>
                <li>
                  <a href="/courses">Cursos</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#none">Laudos</a>
            </li>
            <li>
              <a href="/consulting">Consultoria</a>
            </li>
            <li>
              <a href="/about">Empresa</a>
            </li>
            <li>
              <a href="#none">Noticias</a>
            </li>
            <li>
              <a href="#none">Contato</a>
            </li>
            <li>
              <a href="#none">EAD</a>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
