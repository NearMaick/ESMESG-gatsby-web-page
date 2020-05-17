import React, { useState } from 'react';
import logo from '../../assets/logo.svg';

import { Content } from './styles';

export default function Header() {
  const [condition, setCondition] = useState(true);

  function imageClick() {
    if (condition) {
      setCondition(false);
    } else {
      setCondition(true);
    }
  }

  return (
    <Content>
      <div className={condition ? 'responsive' : 'responsive on'}>
        <a
          href="#none"
          onClick={() => {
            imageClick();
          }}
        >
          <img className="image" src={logo} alt="ESM Treinamentos" />
        </a>
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
      </div>
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
