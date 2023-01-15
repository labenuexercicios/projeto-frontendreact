import styled  from "styled-components";

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    background-color: lightskyblue;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.5rem;
`

export const ImageProduct = ((props) => ({
    src: props.src, al: props.alt,
  }))`
    max-height: 8rem;
  width: 100%;
`