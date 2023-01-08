import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
flex-direction: column;
height: 10vw;
width: 100vw;
background-color: #48586f;
position: relative;
`
export const LoginContainer = styled.div`
order: -1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
height: 5vw;
width: 100vw;
background-color: #F5F5F5;

`

export const Icon = styled.img`
height: 1.5rem;
:hover{
    cursor: pointer;
}

`

export const SearchContainer = styled.div`
position: absolute ;
left: 3%;
display: flex;
border: 1px solid #283d3e;
border-radius: 5px;
width: 15rem;
height: 2vw;
`

export const SearchInput = styled.input`
background-color: #F5F5F5;
border: none;
`

export const ImgInput = styled.img`
height: 1rem;
margin: 2%;

`

export const LoginTxt = styled.p`
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 14px;
color: #283d3e;
margin-right: 5%
`

export const HomeDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin:auto;
:hover{
    cursor: pointer;
}

`

export const LogoHome = styled.img`
height: 3rem;
`
export const LogoTxt = styled.h1`
font-family: 'Notable', sans-serif;
color:#ffffff;
font-weight: 400;
font-size: 2rem;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`
