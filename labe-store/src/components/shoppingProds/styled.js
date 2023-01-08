import styled from "styled-components";

export const ContainerShopping = styled.div`
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    align-items: center;
    padding: 2em;
    min-height: 70vh;
    margin-left:5em ;
    margin-right:5em ;
`;

export const ImagemProd = styled.img`
    width: 80%;
`;

export const ContainerProd = styled.div`
    width: 25% ;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1em;
    justify-content: space-between;

`;


export const NameProd = styled.h1`
    font-size:1vw;
    word-wrap: break-word;
    padding: 1em;
    &:hover{
        transition: 500ms;
        color:#b0da09;
    }
`;

export const PriceProd = styled.span`
    font-size:1vw;
`;


export const BtnAddCart = styled.button`
    border-radius: 12px;
    padding: 12px 19px;
    background-color: rgb(248, 0, 50);
    border:none;
    &:hover{
        transition: 1s;
        opacity: 0.7;
    }
`

export const TextButon = styled.p`
    color:white;
`
