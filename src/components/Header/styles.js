import styled from 'styled-components';

export const Content = styled.div`
  background: #fff;

  position: fixed;

  min-width: 920px;

  height: 100px;
  width: 100%;

  left: 0px;
  top: 0px;

  div.responsive {
    display: none;
  }

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
    transition-property: color;
    transition-duration: 0.5s;
  }

  nav.menu ul ul {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s linear, opacity 0.3s linear;
  }

  nav.menu ul li:hover ul {
    visibility: visible;
    opacity: 1;
  }

  nav.menu a:hover {
    color: #f00;
  }

  nav.menu ul ul li {
    /* background: #333; */
    float: none;
    line-height: 2rem;
  }

  img {
    width: 100px;
    height: 100px;
  }

  /* Responsive */

  @media (max-width: 900px) {
    nav.menu,
    nav.menu ul li {
      display: none;
    }

    div.responsive {
      display: block;
    }

    div.responsive ul {
      display: none;
    }

    div.responsive.on {
      width: 200px;
      height: 80vh;
    }

    div.responsive.on ul {
      display: block;
    }
  }
`;
