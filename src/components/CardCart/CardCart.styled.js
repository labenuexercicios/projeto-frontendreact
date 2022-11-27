import styled from "styled-components";

export const CardCamiseta = styled.div`
  border: 2px solid yellow;
  background-color: rgba(0, 0, 0, 0.729);
  -webkit-box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  -moz-box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  border-radius: 12px;
  width: 99vw;
  height: 24vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ImagemProduto = styled.img`
  width: 10vw;
  height: 20vh;
  align-self: center;
  border: 2px solid blue;
  margin-top: 20px;
`
export const DetalheProduto = styled.div`
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60vw;
`
export const DescricaoProduto = styled.div`
  border: 2px solid red;
  color: white;
`
export const PriceCard = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  height: 30vh;
  align-items: center;

  
  p{
    display: flex;
  }

  h1{
    font-size: 48px;
  }
`
export const SizeAddButton = styled.div`
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 8vw;
    gap: 8px;

    button{
      font-size: 12px;
    }
`