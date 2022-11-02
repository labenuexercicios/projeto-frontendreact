import styled from "styled-components";

export const DivHeader = styled.p`
      display: flex;
      justify-content: center;
      align-items: center;
      button
      {
            border-radius: 50px;
      }
`

export const HeaderStyled = styled.header`
      display: grid;
      position: fixed;
      grid-template-columns: 1fr 2fr 1fr;
      justify-content: space-between;
      align-items: center;
      top: 0;
      left: 0;
      width: 100vw; 
      height: 80px;
      color: white;
      text-shadow: -4px 0 black, 0 4px black,
            4px 0 black, 0 -4px black;
      font-size: 2vw;
      font-size: min(2vw, 30px); //tive que usar min,mas o tamanho max é 30px
      @media screen and (max-device-width: 700px) 
      {
            font-size: 0.1vw;    
      }
`

export const LogoStyled = styled.img`
      height: 80px;
`

export const LogoBlackFridayStyled = styled.img`
      height: 6vw;
      max-height:60px;
      filter: drop-shadow(5px 5px 5px white);
      @media screen and (max-device-width: 700px) 
      {
            height: 10vw;   
      }
`

export const LoginStyled = styled.img`
      justify-self: center;
      height: 4vw;
      max-height:60px;
      border-radius: 50px;
      &:hover 
      {
            height: 4.5vw;
      }
      @media screen and (max-device-width: 700px) 
      {
            height: 10vw;   
      }
`