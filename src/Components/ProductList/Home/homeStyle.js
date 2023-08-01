import styled from "styled-components";

export const HomeContainer = styled.div`
    
        display: flex;
        flex-direction: column;
        padding-top:0vh;
        background-image: linear-gradient(to bottom, lightcyan, lightgray, gray);
        width: 60vw;
        overflow-y: auto;
        
    
`;

export const SelectInput = styled.div`
        display:flex;
        flex-direction: row;
        justify-content: right;
`

export const Product = styled.div`
        display:flex;
        flex-wrap:wrap;
        gap: 2vw;
        justify-content:center;
`

export const Select = styled.select`
        background:transparent;
        color: blue;
        border: none;
       border-radius: 0;
       -webkit-appearance: none;
       font-size:1rem;     
`

export const Paragraph = styled.p`
        padding-right: 0.5vw;
`