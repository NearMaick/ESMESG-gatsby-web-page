import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
`;

export const Content = styled.div`
  position: fixed;
  height: 100px;
  width: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  nav {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px none;
    }
    a {   
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      margin-left: 20px;
      font-weight: bold;
      color: #444;
    }
  }
`;
