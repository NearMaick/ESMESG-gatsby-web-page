import styled from 'styled-components';

export const Container = styled.div`
  /* color: ${(props) => props.theme.primary}; */

  padding: 16px;

  h1 {
    line-height: 120px;
    text-align: center;
  }  

  p {
    line-height: 40px;
    font-size: 16px;    
    text-align: justify;
    background: ${(props) => props.theme.background};
  }
`;
