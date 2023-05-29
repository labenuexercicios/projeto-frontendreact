import styled from "styled-components";

export const CardProdutoContainer = styled.div`
  box-shadow: 0 8px 10px 0 var(--gray);
  max-width: 14rem;
  margin: auto;
  text-align: center;
  font-family: 'Poppins' ,sans-serif;
  border-radius: 0.5rem;
`

export const InfoCard = styled.div`
  padding-top: 1rem;
`

export const ImageCard = styled.img`
  max-width: 14rem;
  height: auto;
  border-radius: 0.5rem;
`

export const PriceCard = styled.p`
  color: var(--gray);
  font-size: 1.3rem;
`

export const ButtonBuyCard = styled.button`
  padding: 0.8rem 3rem;
  margin-top: 1rem;
  background-color: #050801;
  color: #03e9f4;
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 0.5rem;
  letter-spacing: 1.2px;
  transition: 0.5s;
  cursor: pointer;

    &:hover{
        background: #03e9f4;
        color: #050801;
        box-shadow: 0 0 2px #03e9f4,
                    0 0 5px #03e9f4,
                    0 0 10px #03e9f4,
                    0 0 15px #03e9f4;
    linear-gradient(transparent, #0005);
}
`