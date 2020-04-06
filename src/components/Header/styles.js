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

  nav.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  nav.menu ul {
    list-style: none;
    position: relative;
  }

  nav.menu ul li {
    width: 100px;
    float: left;
  }

  nav.menu a {
    padding: 5px;
    display: block;
    color: #000;
    text-decoration: none;
    text-align: center;
  }

  nav.menu ul ul {
    position: absolute;
    visibility: hidden;
  }

  nav.menu ul li:hover ul {
    visibility: visible;
  }
  nav.menu a:hover {
    color: #666;
  }

  nav.menu ul ul li {
    float: none;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
