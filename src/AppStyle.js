import styled from "styled-components";

export const MainApp = styled.div`
  display: grid;
  background-color: black;
  background-image: url("imagens/fundo-foguete2.png");
  background-size: cover;
  background-position: center;
  /* height: 300%; */
  grid-template-areas:
    "HeaderApp HeaderApp HeaderApp"
    "AsideFiltro OrdenacaoSection CartaoStyle"
    "AsideFiltro HomeArticle CartaoStyle"
    "Footer Footer Footer";
`;
export const HeaderApp = styled.div`
  display: grid;
  height: 28vh;
  border: 1px solid black;
  grid-area: HeaderApp;
  z-index: 100;
  top: 0;
  position: sticky;
  background-color: black;
  border-bottom: 4px solid var(--6);
  grid-template-areas: "Logo AstroLogo";
  justify-content:space-between;
  

  H1 {
    color: var(--6);
    display: flex;
    align-items: flex-start;
    padding-left: 3%;
  }
`;
export const Logo = styled.img`
padding-left:10%;
  height: 27vh;
  grid-area: Logo;
`;

export const AstroLogo = styled.img`
  width:95%;
  padding-top:12%;
  height: 30.7vh;
  grid-area: AstroLogo;

`;

export const FooterStylo = styled.footer`
grid-area: Footer;
display:flex;
align-items:center;
justify-content:center;
bottom: 0;
width: 100%;
height: 2.5rem;
background-color:var(--6);

p{
  color:white;
}

a{
  color: white;
}
`

