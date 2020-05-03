import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  min-width: 1360px;

  margin: 150px 0 0;

  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.head {
    height: 600px;
    width: 900px;
    max-height: 500px;

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    nav {
      display: grid;
      grid-template-columns: auto auto auto auto auto;

      a {
        margin: 50px 0;
        padding: 7px 0;

        width: 50px;
        height: 50px;

        font-size: 30px;
        text-align: center;

        background: #ccc;
        color: #000;

        border-radius: 5px;
        text-decoration: none;
      }
    }
  }

  div.sections {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin: 50px 0;

    h1 {
      margin: 100px 0 50px;
      padding: 20px;
      border-radius: 10px;

      background: #404850;
      color: #fff;
    }

    h2 {
      margin-bottom: 30px;
    }
  }

  div.text {
    display: flex;

    align-items: center;
    justify-content: space-around;
  }

  div.text div {
    border-radius: 15px;
    padding: 60px;
    width: 400px;
  }

  div.sections h2 {
    text-align: center;
  }

  div.partone {
    border: solid 3px #000;

    font-size: 16px;
  }

  div.parttwo {
    background: #666;
  }
`;
