import styled from 'styled-components';


export const Div = styled.div`
height: 100vh; 
display: flex;
justify-content: center; 
aLign-items: center;
background-color:  rgba(30, 30, 30, 0.97);
overflow: hidden;
`;


export const Container = styled.div`
  position: relative;

`;

export const Form = styled.form`
position: relative;
padding: 3rem;
min-width: 500px; 
border-radius: 5px;
box-shadow: 0 0 30px #333;
background: rgba(255, 255, 255, 0.1);
border: solid 1px rgba(255, 255, 255, 0.2); 
backgroud-clip: padding-box;
backdrop-filter: blur(10px);
z-index: 2;

`;

export const H2 = styled.h2`
  color : #fff ;
  padding : 1rem ;
  text-align : center ;
  font-family : sans-serif;
  font-size: 2rem ;
`;

export const Input =styled.input`
padding: 10px;
border-radius: 10px 0 0 10px;
border: none; width: 80%;
outline: none;
color: #cf1d22;
`;
export const Button =styled.button`
background-color: transparent;
color: #fff;
padding: 8px 20px;
border: 2px solid;
border-color:#fff ;
transition: all 0.3s ease-out;

  &:hover {
  border-color:#fff;
  background-color:#fff;
  color: rgb(59, 59, 59);
  };
`;

export const Alert = styled.p`
position: relative;
padding: 0.4rem;
margin: 0.5rem;
color: white;
text-align: center; 
font-size: 1.2rem;
font -family: sans-serif; 
border: 1px solid rgba (255, 255, 255, 0.2);
border-radius: 10px;
background: rgba(0, 255, 0, 0.1); 
backdrop-filter: blur(10px);
z-index: 3;
`;

export const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

margin-bottom: 24px;
padding: 24px;
color: #fff;
`;

export const Input2 =styled.input`
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #fff;
`;

