import styled from "styled-components";


//Container on App()
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  padding-top: 5px;
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
width: 78px;
height: 17px;

`

export const SessaoParagrafo = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr auto auto;
 grid-column: 1/4;
 padding-top: 18px;
`
export const QuantidadeProduto = styled.p `
display: flex;

`
export const Ordenacao = styled.p`
 display: flex;
 grid-column: 3/4;
 align-items: flex-start;
`


export const SectionMain = styled.section `
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column: 1/4;
 align-items: center;
 gap: 25px;
 
`

export const StyledSection = styled.section`
 border: 1px solid green;
 width: 20vw;
 padding-bottom: 10px;
 
`
export const StyledProductCard = styled.p`

`

export const StyledHomeParag = styled.p`
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`
