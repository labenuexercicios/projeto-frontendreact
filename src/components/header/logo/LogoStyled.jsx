
import styled from "styled-components"

export const GeneralContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImgLogoStyled = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 20%;
`

export const TitleStyled = styled.h1`
   font-size: 20px;
   color: #001050;
   text-align: center;
   animation: glow 1s ease-in-out infinite alternate;
   -webkit-animation: glow 1s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff;
    }
  
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #eaff4d, 0 0 40px #eaff4d, 0 0 50px #eaff4d, 0 0 60px #eaff4d, 0 0 70px #eaff4d, 0 0 80px #eaff4d;
    }
  }
`;