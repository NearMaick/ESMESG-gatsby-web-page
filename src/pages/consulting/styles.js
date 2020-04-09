import styled from 'styled-components';

export const Container = styled.div`
  /* color: ${(props) => props.theme.primary}; */
  margin: 100px 0 0;
  padding: 16px 16px 0;

  min-width: 1360px;

  div.consulting {
    margin-bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: space-around;   
  }

  div.consulting img {
    height: 500px;
    width: 500px;

    border-radius: 15px;
  }

  div.text {
    /* background: #333; */

    padding: 0 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 500px;
    width: 500px;
  }

  h1 {
    padding: 16px 0;
    text-align: center;
  }  

  p {
    padding: 16px;
    line-height: 30px;
    font-size: 16px;    
    text-align: justify;
    /* background: ${(props) => props.theme.background}; */
  }

  
`;
