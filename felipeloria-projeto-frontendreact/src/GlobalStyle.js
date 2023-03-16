import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
gap: 1vw
`