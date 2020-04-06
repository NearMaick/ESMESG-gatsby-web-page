import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;

  margin-top: 200px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
  }

  .head-menu {
    height: 600px;
    width: 900px;
    max-height: 500px;
    /* max-width:500px; */
    /* position: fixed; */

    nav {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      line-height: 150px;

      a {
        font-size: 30px;
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin: 50px 0;

    h1 {
      border-top-width: 100px;
      line-height: 360px;
    }
  }

  .text {
    display: flex;
    border-top-width: 100px;
  }
`;
