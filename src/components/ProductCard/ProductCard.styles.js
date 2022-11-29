import styled from "styled-components"


export const CardCamiseta = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  border-radius: 12px;
  width: 25vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
`
export const ImagemProduto = styled.img`
  /* border: 2px solid blue; */
  width: 20vw;
  height: 40vh;
  align-self: center;
  margin-top: 20px;
`

export const DescricaoProduto = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 40px;
  height: 20vh;
  color: white;
`
export const PriceCard = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 30vh;
  align-items: center;

  h1{
    font-size: 48px;
  }
`
export const SizeAddButton = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 8vw;
    gap: 8px;

    button{
      font-size: 12px;
    }
`