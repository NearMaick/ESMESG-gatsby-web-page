import React from 'react';
import logo from '../../assets/logo.svg';

import { Content } from './styles';

export default function Header() {
  return (
    <Content>
      {/* <div className="responsive on">
        <div className="toggle">
          <div className="one">
            <img src={logo} alt="ESM Treinamentos" />
          </div>
          <div className="two">2</div>
          <div className="three">3</div>
        </div>
      </div> */}
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
  );
}
