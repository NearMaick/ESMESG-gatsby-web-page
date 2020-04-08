import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  min-width: 1320px;

  margin: 150px auto 0;

  div.content {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding-bottom: 16px;
  }

  div.text {
    padding: 12px;

    background: ${(props) => props.theme.background};

    height: 745px;
    width: 500px;

    display: flex;
    align-items: center;

    border-radius: 15px;
  }

  div.text p {
    color: ${(props) => props.theme.text};
    line-height: 36px;
    font-size: 20px;
    text-align: justify;
  }

  img.about {
    width: 500px;
    border-radius: 15px;
  }

  div.main {
    height: 800px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${(props) => props.theme.background};
    border-radius: 15px;

    line-height: 150px;

    h1 {
      width: 100%;

      font-size: 40px;
      text-align: center;
    }
  }

  div.description {
    height: 500px;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
  }

  h1 {
    /* line-height: 50px; */
  }

  div.desc {
    text-align: justify;
    line-height: 36px;
    width: 500px;
    font-size: 20px;
    margin: 5px;
  }

  div.depositions {
    background: ${(props) => props.theme.background};

    height: 1000px;
    border-radius: 15px;

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
