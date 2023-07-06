import styled from "styled-components";

export const HeaderLab = styled.div`
grid-column: 1/-1;
`

export const BodyContainer = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 200px;


  @media (max-width: 600px) {
    grid-template-rows: 300px 1fr 200px;
  }

`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;
  column-gap: 1em;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }


  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  
  &:hover {
    box-shadow: 2px 2px 5px #70DFEF;
}
`;

export const CardTexto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  
`;
export const Filtros = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;

  @media (max-width: 600px) {
    flex-direction:column;
  }

`;

export const InputBusca = styled.input`
  margin-right: 3%;
  border: 2px solid rgb(102, 87, 178);
  border-radius: 10px;
  padding: 5px;
  box-shadow: 2px 2px 5px #70DFEF;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 1%;
  }
` 

export const TemplateMain = styled.div`
display: grid;
grid-template-columns: 2.5fr 1fr;
  
  padding: 16px;
  column-gap: 2em;
  flex-grow: 1;
  background-image: url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_earth_venues_univearse-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_earth_venues_univearse_saturn-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_univearse_telestial_space_mars-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_univearse_telestial_space_pluto-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_univearse_telestial_space-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_earth_venues_univearse_mars-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_earth_venues_univearse_pluto-512.png"), url("https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_earth_venues_univearse_jupiter-512.png");
  background-size: 50px;
  background-repeat: no-repeat;
  background-position-y: 10px, 70px, 130px, 200px, 270px, 350px, 430px, 520px, 570px;
  background-position-x: right, right, right, right, right, right, right, right;


  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

`

export const ContainerCarrinho = styled.div`
display: flex;
flex-direction:column;
border-radius: 10px;
padding: 1em;
height: 80%;
background: rgba(255,255,255, 0.1);
backdrop-filter: blur( 10px);
-webkit-backdrop-filter: blur(10px);
color: white;
box-shadow: 2px 2px 5px #70DFEF;
color: black;

h3{
  display: flex;
  justify-content: center;
}

&:hover{
  
  transition: 0.3s;
  color:white;
  background-color: #1E1E1E;

  
}
`

export const CarrinhoTexto = styled.div`
display:flex;
justify-content: space-between;
align-items: center

`
export const LogoLab = styled.img`
 width: 100px;

`
export const IconeTexto = styled.div`
  display: flex;
  align-items: center;
  background-color: #1E1E1E;
  color: white;
  justify-content: center;
  box-shadow: 2px 2px 5px #70DFEF;

`

export const TotalItens = styled.div`
 display: flex;
  padding: 16px;
  flex-direction: column;
`



export const BtnAdicionar = styled.button `
background-color: #07a14c;
color: white;
border-radius: 8px;
padding: 10px;
border: none;
font-weight: 500;

&:hover {
  background-color: #087037;
}

`
 
export const BtnRemover = styled.button `
background-color: #c91800;
color: white;
border-radius: 8px;
padding: 5px;
border: none;
font-weight: 500;

&:hover {
  background-color: #b31c07;
}

`

export const BtnComprar = styled.button `
background-color: #6657b2;
color: white;
border-radius: 8px;
padding: 5px;
border: none;
font-weight: 500;

&:hover {
  background-color: #463b81;
}

`

export const Footer = styled.div`
grid-row-start: 3;
display:flex;
flex-direction: row;
justify-content: space-evenly;
grid-row-gap: 10px;
/* grid-column-gap: 2em; */
padding: 16px;
background-color: #1E1E1E;

a{
    text-decoration: none;
    color: white;
}

img{
    width: 40px;
}

h4{
    color: #70DFEF;
}

.contato{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
}

.redes-sociais{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
}

.institucional{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
}
p{
    color: rgb(255, 0, 208);
}
`
