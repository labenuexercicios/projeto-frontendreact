import styled from 'styled-components'
import starBackground from "../../assets/images/star.png";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20vh;
    background-image: url(${starBackground});
`

export const ImgLogo = styled.img`
    height: 15vh;
    width: 50vw;
    margin: 0 auto;
    margin-left: 23%;
`
export const ImgCart = styled.img`
    height: 6.5vh;
    margin-right: 10vh;
   
`