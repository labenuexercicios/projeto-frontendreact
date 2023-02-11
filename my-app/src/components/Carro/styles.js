import styled from "styled-components";


export  const CardItem = styled.article`
  display: inline;
  }
`


export const CardText = styled.p`
color:  #26293A;
`
export const CardTitle= styled.h2`
color:  #26293A;
`

export const Card = styled.div`
  width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-image: linear-gradient(360deg, var(--color-price) 50%, #fff 50%);
    flex-wrap: wrap;
`