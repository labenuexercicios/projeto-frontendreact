import styled from "styled-components";

export const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr, 10fr;
    align-items: center;
    justify-content: center;
    width: 60vw;
    border: 1px solid black;
`

export const Title = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
`

export const Produtos = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
`

export const Ordenação = styled.div`
    display: flex;
`
export const Cards = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;
    display: flex;
    gap: 2vw;
    padding: 0 2vw;
`