import styled from "styled-components";

export const PaginationButton = styled.div`
    display: flex;
    gap: 6px;
    border: none;
    background-color: transparent;
    position: absolute;
    margin-top: 19rem;
    button.active{
        background-color: #8707ff;
        
    }
`

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    font-weight: 600;
`