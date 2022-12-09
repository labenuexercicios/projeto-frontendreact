import styled from "styled-components";


export const CardCamiseta = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  height: 24vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`
export const ImagemProduto = styled.img`
  /* border: 2px solid blue; */
  width: 10vw;
  align-self: center;
  margin-left: 16px;
`
export const DetalheProduto = styled.div`
    /* border: 2px solid white; */
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    gap: 20px;
    width: 30vw;
    padding-left: 3vw;
`
export const DescricaoProduto = styled.div`
  /* border: 2px solid red; */
  color: white;
  
`
export const ChoosenSize = styled.p`
  /* border: 2px solid red; */
  display: flex;
  gap: 8px;

  select{
    width: 3vw;
    background: rgba(0, 0, 0, 0);
    border: none;
    color: white;

    /* option{
      background: rgba(0, 0, 0, 0);
      color: black;
    } */
  }
`
export const PriceCard = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  gap: 24px;
  height: 20vh;
  align-items: center;
  margin: 16px;

  
  p{
    display: flex;
  }

  h1{
    font-size: 38px;
  }
`
export const QuantityRemove = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button{
    cursor: pointer;
  }
`
export const QuantityProduct = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    justify-content: space-around;
    width: 6vw;
    gap: 8px;

    button{
      font-size: 16px;
      width: 2vw;
    }
`