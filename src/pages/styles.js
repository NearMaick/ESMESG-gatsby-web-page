import styled from 'styled-components';

export const Container = styled.div`
  /* background: #f2f2f2; */

  width: 80vw;

  padding: 100px 0 0 20%;

  display: flex;
  flex-direction: column;

  align-items: center;

  div.container {
    display: flex;
    flex-direction: column;
    
    min-width: 1320px;

    text-align: center; 
  }

  div.main {
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    /* background: ${(props) => props.theme.background}; */
    /* border-radius: 15px; */

    line-height: 100px;    
  }

  div.main h1 {
      font-size: 60px;
  }

  div.description {
    height: 600px;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
  }

  div.desc {
    /* background: ${(props) => props.theme.background}; */

    width: 550px;
    height: 400px;

    text-align: justify;
    line-height: 36px;
    width: 500px;
    font-size: 20px;
    margin: 5px;    
  }

    div.desc h1 {
      line-height: 50px;
      text-align: center;
    }

    div.desc img {
      width: 550px;
      height: 400px;
      border-radius: 15px;
    }

    div.desc a {
      background: ${(props) => props.theme.tertiary};

      padding: 16px;

      margin: 30%;         

      text-decoration: none;
      color: #fff;
      border-radius: 15px;
    }

    div.desc p {
      margin: 5px 5px 25px;

      line-height: 42px;
    }

  div.depositions {
    /* background: ${(props) => props.theme.background}; */

    height: 1000px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    line-height: 200px;    
  }

  div.depositions img {
      width: 600px;
      height: 400px;
    }
`;
