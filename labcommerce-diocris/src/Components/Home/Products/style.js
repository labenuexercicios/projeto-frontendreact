import { styled } from "styled-components"

export const ProductWrapper = styled.div`
    @media (max-width: 588px){
    width: 80%;
  }
`
export const ProductsStyle = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
    height: 100%;
    padding-top: 1rem;
    row-gap: 1.5rem;
    @media (min-width: 768px) {
        grid-column: 3/10;
        grid-row: 1;
        row-gap: 1.5rem;
  }
  
  h1{
    width: 100%;
    height: fit-content;
    text-align: center;
  }

  select{
    background-color: #131313;
    color: #ffffff;
    outline: none;
    border-radius: 1rem;
    border:  1px solid #8C6BE8;
    text-align: center;
    padding: 0.5rem 1rem;
    height: fit-content;

  }


    .inline-header{
      display: inline-flex;
      width: 100%;
    }
`
export const MainLineWrapper = styled.div`
width: 100%;
padding: 1.5rem;
  select{
    float: right
  }
`
