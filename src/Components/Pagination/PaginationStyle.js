import styled from "styled-components";

export const PaginationButton = styled.div`
    display: flex;
    gap: 6px;
    border: none;
    background-color: transparent;
    position: absolute;
    margin-top: 1rem;
    button.active{
        background-color: #8707ff;
        
    }

    @media screen and (max-width: 1300px){
        margin-top: 13rem;
    }


    @media screen and (min-width: 1400px){
        margin-top: 8rem;
    }


    @media screen and (max-width: 400px){
        margin-top: 20rem;
    }
`

export const Button = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 1.2rem;
`