import React from 'react'
import styled from 'styled-components';

function UiComponents() {
  return (
    <>
        <Circle />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
    </>
  )
}

const Circle = styled.div`
border-radius: 50%; 
height: 200px;
width: 200px;
position: absolute; 
top: 60%;
background: Linear-gradient(to right, #66adff, #2972f0);
Left: 70%;
z-index : 1;
`;

const Circle2 = styled(Circle)` 
height: 150px;
width: 150px;
top : 10%;
left: -10% ;
`;
const Circle3 = styled(Circle)` 
height: 320px;
width: 320px;
top : 38%;
left: 10% ;
`;

const Circle4 = styled(Circle)` 
height: 100px;
width: 100px;
top : 15%;
left: 50% ;
`;

const Circle5 = styled(Circle)` 
height: 80px;
width: 80px;
top : 15%;
left: 80% ;
`;




export default UiComponents