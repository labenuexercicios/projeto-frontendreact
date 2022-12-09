import styled from "styled-components"

export const Main = styled.main`
display: flex;
flex-direction: column;
background-color: #eeeeee;
width: 100vw;
height: auto;
font-family: 'EB Garamond', serif;
`

export const MainHeader = styled.div`
display: flex;
width: 100vw;
height: 50px;`

export const MainBody = styled.div `
display:flex;
width: 100vw;`

export const FilterContainer = styled.section`
display: flex;
width: 25vw;
height:auto;
justify-content:center;
align-items:center;
`
export const CardContainer = styled.section `
display: flex;
flex-wrap:wrap;
width: 75vw;
padding-bottom: 30px;
gap: 10px;
align-items:center;
justify-content:space-evenly;`