import styled from "styled-components"


export const ContainerPrincipal = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2em;
    margin-left:2em;

    `

export const ImagemCart = styled.img`
    width: 10%;
`

export const BoxName = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    gap: 1em;
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
    border:none;
    font-size: 2rem;
    background: transparent;
    font-style: italic;
    color: rgb(248, 0, 50);
`
export const TxtPrice = styled(TxtName)`
`

export const ContainerCartAndPrice = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
    width: 50%;

`

export const BoxCartEmpty = styled.div`
    height: 100%;
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
