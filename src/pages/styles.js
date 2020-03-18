import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;

 .container {
  display: flex;
  flex-direction: column;
 }

 .container > div { 
  text-align: center;
  height: 800px;
}

.main {
  line-height: 150px;

  h1 {
    font-size: 40px;
  }
}

#description {
  display: flex;
  flex-direction: row; 

  align-items: center;
  justify-content: space-around;
  
}  

.desc {
  text-align: justify;
  line-height: 50px;
  width: 500px;
  height: 600px;
  font-size: 20px; 
  margin: 5px;

  img {
    height: 400px;    
  }
}

.depositions {
  background: ${props => props.theme.background};  

  display: flex;
  flex-direction: column;
  align-items: center;

  line-height: 200px;

  img {
    width: 500px;
    height: 400px;    
  }
}
`;
