import styled from "styled-components"

export const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35%;
    gap: 10px;
    padding-left: 20px;
    @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
    }  

`

export const Favorite = styled.img`
    width: 30px;
    height: 30px;     
`
export const ShoppingCart = styled.img`
    width: 30px;
    height: 30px; 
`