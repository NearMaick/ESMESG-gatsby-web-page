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
        <div class="socials">
          <div>  
            <strong>Redes Sociais</strong>
          </div>
          <div class="contents">
            <img src={facebook} />
            <img src={insta} />
          </div>
        </div>       

        <div class="contact">
          <div> 
            <strong>Entre em contato conosco</strong>
          </div>
          <div class="contents">
          <p><img src={tel} /> +55 47 99191-9241</p>                        
          <p><img src={email} /> contato@emseg.com.br </p>  
          </div>
        </div>
      </Content>
    </Container>
  );
}
