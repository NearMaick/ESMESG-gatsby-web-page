import React from 'react';

import { Container, Content } from './styles';

import facebook from '../../assets/facebook.svg';
import insta from '../../assets/insta.svg';
import email from '../../assets/email.svg';
import tel from '../../assets/tel.svg';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div className="socials">
          <div>
            <strong>Redes Sociais</strong>
          </div>
          <div className="contents">
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="instagram" />
          </div>
        </div>

        <div className="contact">
          <div>
            <strong>Entre em contato conosco</strong>
          </div>
          <div className="contents">
            <p>
              <img src={tel} alt="tel" /> +55 47 99191-9241
            </p>
            <p>
              <img src={email} alt="email" /> contato@emseg.com.br
            </p>
          </div>
        </div>
        <div className="copy">
          <strong>Design feito por NearMaick</strong>
        </div>
      </Content>
    </Container>
  );
}
