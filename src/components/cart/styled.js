import styled from "styled-components";

export const CartItem = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        button {
            height: 25px;
            width: 70px;
        }
    }
`

export const TotalValue = styled.div`
    display: flex;
    justify-self: flex-end;
`