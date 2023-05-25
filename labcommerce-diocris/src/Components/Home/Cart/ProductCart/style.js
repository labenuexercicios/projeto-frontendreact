import { styled } from "styled-components";

export const ProductCartStyle = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
font-size: 0.7rem;
button{
    scale: 0.6
}
div:nth-child(1){
    display:inline-flex;
              justify-content: space-between;
              width: 100%;
              padding: 0.5rem
}
div:nth-child(2){
    float: right;
              display: inline-flex
}
`