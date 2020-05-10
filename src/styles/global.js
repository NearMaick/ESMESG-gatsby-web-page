import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;    
    font-size: 100%;
  } 

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 1240px;
  }
 
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  `;
