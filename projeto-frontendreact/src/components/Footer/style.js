import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    width: 100%;
    background-color: #5F9EA0;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    p
    {
        color: black;
    }
    @media screen and (max-device-width: 1000px) 
    {
        flex-direction:row;
        height: 200px;
    }
    @media screen and (max-device-width: 700px) 
    {
        display: grid;
        grid-template-rows: 1fr 1.5fr;
        align-items: flex-start;
        height: 140px;
        margin-bottom: 8vh;
        padding-top:5px;
        font-size: 3vw; 
        z-index:1;
    }
`

export const SocialNetwork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-device-width: 1000px) 
    {
        flex-direction:row;
    }
`

export const ImagemIcones = styled.div`
    display: flex;
    width: 207px;
    justify-content: space-around;
    align-items:color-interpolation-filters;
    img 
    {
        height: 5vw;
        max-height:50px;
        width: auto;
        &:hover 
        {
            height: 6vw;
            max-height:55px;
            width: auto;
        }
    }
    @media screen and (max-device-width: 700px) 
    {
        img 
        {
            height: 7vw;
            min-height:30px;
            width: auto;
            &:hover 
            {
                height: 8vw;
                min-height:35px;
                width: auto;
            }
        }
    }
`

export const ImagemInsta = styled.img`
    height: 5vh;
    width: auto;
    &:hover 
    {
        height: 6vh;
        width: auto;
    }   
`

export const  ImagemLinkedin = styled.img`
    height: 5.2vh;
    width: auto;
    &:hover 
    {
        height: 6.2vh;
        width: auto;
    }
`
  
export const ImagemGit = styled.img`
    height: 5vh;
    width: auto;
    &:hover 
    {
        height: 6.2vh;
        width: auto;
    };
`