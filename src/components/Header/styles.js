import styled from 'styled-components';

export const Content = styled.div`
  background: #fff;

  position: fixed;

  min-width: 920px;

  height: 100px;
  width: 100%;

  left: 0px;
  top: 0px;

  nav.menu {
    display: flex;
    align-items: center;
    justify-content: center;
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
    /* background: #ddd; */
    padding: 10px 0 18px;
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
    /* background: #333; */
    float: none;
    line-height: 20px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
