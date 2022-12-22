import styled from "styled-components";

export const ContainerShopping = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    align-items: stretch;
    padding: 2em;

`;

export const ImagemProd = styled.img`
    width: 90%;
`;

export const ContainerProd = styled.div`
    width: 20% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
`;


export const NameProd = styled.h1`
    font-size:1.5vw
`;

export const PriceProd = styled.span`
    font-size:1.5vw

`;
