import styled from "styled-components";

export const ProductCardContainer = styled.article`
    border: 1px solid black;
    margin: 8px 0 0 4px;
    padding-bottom: 8px;
    border-radius: 3px;
    
    .Card-price-and-button{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 10px 0 10px;
    }
    .header{
        padding-left: 8px;
    }
`