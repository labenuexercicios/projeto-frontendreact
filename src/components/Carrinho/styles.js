import styled from "styled-components"

export const CarrinhoStyle = styled.div`
    border: 5px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    img{
        height:2rem;
    }
    tr{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap:6px;
        font-size: 80%;
    }
    td{
        font-size: 85%
    }

`


