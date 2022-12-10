import styled from "styled-components";

export const CarrinhoPageStyled = styled.main  ` 
    min-height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */

    .carrinho{
        padding:20px;
        align-self: flex-start;
    }
    .container-produtos {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    } 
    .total{
        display: flex ;
        align-self: flex-end;
        padding: 40px;
    }

`