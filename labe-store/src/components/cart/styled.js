import styled from "styled-components"

export const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
width: 25%;
/* justify-content: space-around; */
padding: 1em;
border: 2px solid;

`
export const Img = styled.img`
    width: 100%;
`
export const ProdCart = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: center;
`
export const DivImg = styled.div`
    width: 15%;
`

export const DivInfoProd = styled(DivImg)`
    display: flex;
    gap: 1em;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
export const DivButtons = styled(DivImg)`

`

export const ContainerCart = styled.div`

`
