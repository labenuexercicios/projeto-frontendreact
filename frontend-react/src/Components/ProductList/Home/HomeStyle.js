import styled from "styled-components";


//Container on App()
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  padding-top: 5px;
  padding-bottom: 20px; 
  font-size: 12px;
   
`
//main section on Home.js
export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px;
`

//select section on main section of home.js
export const StyledSelect = styled.select`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100px;
height: 20px;

`

export const SessaoParagrafo = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr auto auto;
 grid-column: 1/4;
 padding-top: 18px;
 padding-bottom: 20px; 
`
export const QuantidadeProduto = styled.p `
display: flex;

`
export const Ordenacao = styled.p`
 display: flex;
 grid-column: 3/4;
 align-items: flex-start;
 padding-right: 5px
`


export const SectionMain = styled.section `
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column: 1/4;
 align-items: center;
 gap: 25px;
 
`

export const StyledSection = styled.section`
 border: 2px dotted navy;
 width: 20vw;
 padding-bottom: 10px;
 
`
export const StyledProductCard = styled.p`
 
`

export const StyledHomeParag = styled.p`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`

export const ImageContainer = styled.div `
 position: relative;
  width: 100%;
  padding-bottom: 95%;
  overflow: hidden;
`


export const ProductImage = styled.img `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

