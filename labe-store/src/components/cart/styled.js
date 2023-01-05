import styled from "styled-components"


export const ContainerPrincipal = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    `

export const ImagemCart = styled.img`
    width: 10%;
`

export const BoxName = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    width: 43%;
    align-items: center;
`
export const BoxButtonsAddAndRemove = styled(BoxName)`
    width: 15%;
`

export const BoxPrice = styled(BoxName)``


export const TxtName = styled.p`
    font-size:1.5rem;
    margin-right: 0.5em;
    margin-left: 0.5em;
`

export const Buttons = styled.button`
    height: 3em;
    width: 3em;
`
export const TxtPrice = styled(TxtName)`
`

export const ContainerCartAndPrice = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
    width: 50%;

`
