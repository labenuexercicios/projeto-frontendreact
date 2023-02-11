import styled from "styled-components";

export const FiltersStyledContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: 1px solid white;
    background: linear-gradient(to top,  #d3d3d3,#ffffff 90%);
    height: 7vh;

`
export const InputStyled = styled.input `
  
    width: 170px;
    background-image: linear-gradient(to bottom, #bce2ff, #ffffff, #bcd9ff);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: calc(0.7vw + 1.5em);
    padding: 7px;
    border-radius: 0.9rem;
    color: black;
    font-size: calc(0.25vw + 0.9em);
`
export const ContainerPriceMinMaxStyled = styled.div `
    display: flex;
    flex-direction: row;
    gap: 40px;
`

export const ButtonCartStyled = styled.button`
    width: 120px;
    background-image: linear-gradient(to bottom, #002f61, #ffffff, #002f61);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: calc(0.7vw + 1.5em);
    padding: 7px;
    border-radius: 0.9rem;
    color: black;
    font-size: calc(0.25vw + 0.9em);
`

export const SelectStyled = styled.select`
    width: 170px;
    background-image: linear-gradient(to bottom, #bce2ff, #ffffff, #bcd9ff);
    box-shadow: 0px 0px 7px rgb(5, 0, 47);
    border: none;
    height: calc(0.7vw + 1.5em);
    padding: 7px;
    border-radius: 0.9rem;
    color: black;
    font-size: calc(0.25vw + 0.9em);
`