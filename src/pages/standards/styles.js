import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;

  .container{         
    display: flex;
    flex-direction: column;
  }

  .head-menu {
    height: 600px;
    width:600px;
    max-height:500px;
    max-width:500px;
    /* position: fixed; */
    

    nav {
    display: flex;
    justify-content: space-between;
    line-height: 50px;

      a {
        font-size: 30px;
      }
    }
  }

  

 section {   
    display: flex;
    flex-direction: column;
    align-content:space-between;        
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