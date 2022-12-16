import styled from "styled-components"

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;

`

export const BoxLogo = styled.div`
    width: 25%;
    padding: 1em;
    border: 2px solid;
    display: flex;
    justify-content: center;
`

export const BoxDivList = styled(BoxLogo)`
    width: 50%;
    justify-content: center;
`

export const BoxList = styled.ul`
    display: flex;
    gap: 1em;
    justify-content: center;
    list-style: none;
`

export const BoxButtons = styled(BoxLogo)`

`

export const Buttons = styled.button`
    background-color: transparent;
    width: 25%;
    height: 100%;
    border: none;
`
