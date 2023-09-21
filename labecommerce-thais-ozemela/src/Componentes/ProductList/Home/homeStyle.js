import styled from "styled-components";

export const HomeContainer = styled.div`
    
        display: flex;
        flex-direction: column;
        padding-top:0vh;
        background-image: linear-gradient(to bottom, #c71585, lightyellow, peachpuff);
        width: 60vw;
        overflow-y: auto;
        
    
`;

export const SelectInput = styled.div`
        display:flex;
        flex-direction: row;
        justify-content: right;
        padding-top: 1vh
`

export const Product = styled.div`
        display:flex;
        flex-wrap:wrap;
        gap: 2vw;
        justify-content:center;
        padding-top: 2vh
`

export const Select = styled.select`
        background:transparent;
        color: lightyellow;
        text-decoration: underline;
        border: none;
       border-radius: 0;
       -webkit-appearance: none;
       font-size:1rem;     
`

export const Paragraph = styled.p`
        padding-right: 0.5vw;
`