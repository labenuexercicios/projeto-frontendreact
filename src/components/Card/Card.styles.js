import styled from "styled-components"


export const CardCamiseta = styled.div`
  border: 2px solid yellow;
  background-color: rgba(0, 0, 0, 0.729);
  -webkit-box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  -moz-box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  border-radius: 12px;
  width: 25vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
`
export const ImagemProduto = styled.img`
  width: 20vw;
  height: 40vh;
  align-self: center;
  border: 2px solid blue;
  margin-top: 20px;
`

export const DescricaoProduto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 40px;
  height: 20vh;
  border: 2px solid red;
  color: white;
`