import styled from 'styled-components';


export const ContainerApp = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
grid-template-rows: 1fr;

`

export const ImagemFundo = styled.div`
background-image: url("./img2/fundo.jpg");
background-size: cover;
background-repeat: no-repeat;
width: 100%;
background-position: center center;
justify-content: center;
text-align: center;
grid-column: 2/3;
min-height: 100%;
`



export const Image = styled.img`
border-radius: 0.5rem;
margin: 2rem 0;
`

export const ContainerProduto = styled.div`
width: 100%;
color: black;
`


export const Img = styled.div`
border: 1px solid white;
margin: 30px;
padding-left: 1vw;
padding-right: 1vw;
padding-top: 2vh;
`

export const ImagemEsquerda = styled.div`
background-color: black;
`


export const ImagemDireita = styled.div`
background-color: black;
`
