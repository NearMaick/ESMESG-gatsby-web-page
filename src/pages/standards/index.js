import React from 'react';

import GlobalStyle from '../../styles/global';

import logo from '../../assets/logo.svg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default function () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <div className="container">
        <div className="head-menu">
          <header>
            <h1>Normas Regulamentares</h1>
          </header>
          <nav>
            <a href="#nr05">05</a>
            <a href="#nr10">10</a>
            <a href="#nr11">11</a>
            <a href="#nr12">12</a>
            <a href="#nr13">13</a>
            <a href="#nr17">17</a>
            <a href="#nr18">18</a>
            <a href="#nr23">23</a>
            <a href="#nr29">29</a>
            <a href="#nr30">30</a>
            <a href="#nr31">31</a>
            <a href="#nr32">32</a>
            <a href="#nr33">33</a>
            <a href="#nr34">34</a>
            <a href="#nr35">35</a>
          </nav>
        </div>

        <div className="sections">
          <section id="nr05">
            <h1>Norma Regulamentar 05</h1>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa tincidunt dui ut ornare lectus sit amet. Non
                consectetur a erat nam at lectus urna. Augue ut lectus arcu
                bibendum at varius vel pharetra. Lacus laoreet non curabitur
                gravida arcu ac. Magna fermentum iaculis eu non diam. Sed cras
                ornare arcu dui vivamus arcu felis bibendum. Id aliquet risus
                feugiat in ante metus. Ut placerat orci nulla pellentesque. Non
                consectetur a erat nam. Dui ut ornare lectus sit amet est
                placerat. Feugiat in fermentum posuere urna nec tincidunt
                praesent semper.
                <a href="#top">back to top</a>
              </p>
              <img src={logo} alt="logo" />
            </div>
          </section>
          <section id="nr10">
            <h1>Norma Regulamentar 10</h1>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa tincidunt dui ut ornare lectus sit amet. Non
                consectetur a erat nam at lectus urna. Augue ut lectus arcu
                bibendum at varius vel pharetra. Lacus laoreet non curabitur
                gravida arcu ac. Magna fermentum iaculis eu non diam. Sed cras
                ornare arcu dui vivamus arcu felis bibendum. Id aliquet risus
                feugiat in ante metus. Ut placerat orci nulla pellentesque. Non
                consectetur a erat nam. Dui ut ornare lectus sit amet est
                placerat. Feugiat in fermentum posuere urna nec tincidunt
                praesent semper.
                <a href="#top">back to top</a>
              </p>
              <img src={logo} alt="logo" />
            </div>
          </section>
          <section id="nr11">
            <h1>Norma Regulamentar 11</h1>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa tincidunt dui ut ornare lectus sit amet. Non
                consectetur a erat nam at lectus urna. Augue ut lectus arcu
                bibendum at varius vel pharetra. Lacus laoreet non curabitur
                gravida arcu ac. Magna fermentum iaculis eu non diam. Sed cras
                ornare arcu dui vivamus arcu felis bibendum. Id aliquet risus
                feugiat in ante metus. Ut placerat orci nulla pellentesque. Non
                consectetur a erat nam. Dui ut ornare lectus sit amet est
                placerat. Feugiat in fermentum posuere urna nec tincidunt
                praesent semper.
                <a href="#top">back to top</a>
              </p>
              <img src={logo} alt="logo" />
            </div>
          </section>
          <section id="nr12">
            <h1>Norma Regulamentar 12</h1>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa tincidunt dui ut ornare lectus sit amet. Non
                consectetur a erat nam at lectus urna. Augue ut lectus arcu
                bibendum at varius vel pharetra. Lacus laoreet non curabitur
                gravida arcu ac. Magna fermentum iaculis eu non diam. Sed cras
                ornare arcu dui vivamus arcu felis bibendum. Id aliquet risus
                feugiat in ante metus. Ut placerat orci nulla pellentesque. Non
                consectetur a erat nam. Dui ut ornare lectus sit amet est
                placerat. Feugiat in fermentum posuere urna nec tincidunt
                praesent semper.
                <a href="#top">back to top</a>
              </p>
              <img src={logo} alt="logo" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
