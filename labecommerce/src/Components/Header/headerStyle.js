import React from 'react'
import styled, {keyframes} from 'styled-components'

export const HeaderStyle = styled.div`
    background:#2C5F2D;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#97BC62;
    height:10vh;
    font-size:15px;
    font-style:bold;

    /* margin-bottom:2rem; */
    
`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(100px);
  }
`;

export const Banner = styled.div`
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLS3-MLaLej-4dX60HFICsZ6ekDak0ox90A&usqp=CAU);
    display:flex;
    height: 40vh;
    /* color: white; */
    font-size:35px;
    justify-content:center;
    align-items:center;
   
p{
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: ${moveAnimation} 4s infinite; /* Aplicando a animação */
    letter-spacing:5px

}
`;








