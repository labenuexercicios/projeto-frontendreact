import styled from "styled-components";


export const StyledContainer = styled.div`
  display: flex;
  height: auto;
  padding-top: 5px;
  padding-bottom: 20px; 
  font-size: 12px;  
`

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

export const StyledSelect = styled.select`
grid-template-columns: 1fr 1fr;
height: 20px;
justify-self: end;
`

export const SessaoParagrafo = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr auto auto;
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
 grid-template-columns: 1fr 1fr 1fr ;
 grid-column: 1/4;
 align-items: center;
 column-gap: 100px;
 row-gap: 95px;
`

export const StyledSection = styled.section`
 border: 2px dotted navy;
 width: 21vw;
 padding-bottom: 10px;
 animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      border-color: navy;
    }
    50% {
      border-color: white;
    }
    100% {
      border-color: navy;
    }
  }
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

