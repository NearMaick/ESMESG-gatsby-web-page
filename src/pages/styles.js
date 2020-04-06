import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;

  width: 100vw;

  margin-top: 100px;

  div.container {
    display: flex;
    flex-direction: column;
  }

  div.container {
    text-align: center;
    height: 2300px;
  }

  div.main {
    height: 800px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.background};

    line-height: 150px;

    h1 {
      font-size: 40px;
    }
  }

  div.description {
    height: 600px;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
  }

  div.desc {
    text-align: justify;
    line-height: 36px;
    width: 500px;
    font-size: 20px;
    margin: 5px;

    h1 {
      line-height: 50px;
    }

    img {
      height: 400px;
    }
  }

  div.depositions {
    background: ${(props) => props.theme.background};

    height: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    line-height: 200px;

    img {
      width: 500px;
      height: 400px;
    }
  }
`;
