import styled from "styled-components";

export const SlideContainer = styled.div`
order: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 100vw;
height: 30vw;
background-color: #F5F5F5;
`

export const SlidePromo = styled.div`
width: 65%;
height: 80%;
margin-top: 0.5%;
background-image: url('https://static3.tcdn.com.br/files/482157/themes/212/img/settings/midnight-1.jpg');
background-repeat: no-repeat;
background-size: cover;
border-radius: 5px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));

`
export const LinePromo = styled.ul`
width: 100vw;
height: 3vw;
background-color: #d62e2e;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: 2px, solid, black;
`
export const TxtPromo = styled.li`
list-style: none;
font-family: 'Tauri', sans-serif;
font-weight: 400;
font-size: 1rem;
color: #ffffc0;
margin: 2%;
`