import styled from "styled-components";

export const ContainerShopping = styled.div`
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    align-items: stretch;
    padding: 2em;
    border: 2px solid;
    min-height: 70vh;

`;

export const ImagemProd = styled.img`
    width: 80%;
`;

export const ContainerProd = styled.div`
    width: 15% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    justify-content: space-between;

`;


export const NameProd = styled.h1`
    font-size:1.2vw;
    word-wrap: break-word;
    padding: 1em;
`;

export const PriceProd = styled.span`
    font-size:1vw;
`;
