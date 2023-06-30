import styled from 'styled-components'

export const CardProdutos = styled.div`
     display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: space-between;

    > img {
    width: 100%;
    height: 200px;

  }
  
  >p{
    display:none;
  }`

export const Tela = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;

`
export const Painel = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;

`
export const PainelInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

>button{
border:1px solid  #6752ff;
border-radius:4px;
display:inline-block;
cursor:pointer;
font-family:Verdana;
font-weight:bold;
font-size:13px;
padding:6px 10px;
text-decoration:none;

border-color: #6752ff;
background:linear-gradient(to bottom,  #6752ff 5%,  #6752ff 100%);
box-shadow:inset 0px 1px 0px 0px  #6752ff;
color: #fff;
text-shadow:0px 1px 0px #528009;

}

`
export const FiltroContainer = styled.div`
display: flex;
justify-content: space-between;

`
export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
width: 72vw;
gap:10px;

`
