import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  border-radius: 15px;

  min-width: 1320px;

  div.copy {
    position: absolute;
    color: #fff;
    margin-left: 15px;
    margin-top: 180px;
  }
`;

export const Content = styled.div`
  position: relative;

  height: 200px;
  display: flex;
  justify-content: space-between;

  .socials,
  .contact {
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      height: 25px;
      margin-left: 30px;
      padding-right: 20px;
    }

    strong,
    p {
      color: #fff;
      text-align: center;
      margin-left: 30px;
      background: #000;
    }

    .contents {
      display: flex;
      margin-top: 24px;
      margin-bottom: 50px;
    }
  }

  .contact {
    margin-right: 90px;
  }

  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    margin-left: 20px;
    font-weight: bold;
    color: #fff;
  }

  aside {
    padding: 10px 100px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
