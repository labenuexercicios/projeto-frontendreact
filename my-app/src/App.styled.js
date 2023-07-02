import styled from 'styled-components'

export const Geral = styled.div`
    position: relative;
    overflow: hidden;
    
    
`

export const AppStyled = styled.div`
    
    display: grid ;
    grid-template-columns: 1fr 5fr 1fr;
    height: 85vh;
    overflow: hidden;
    
`


export const Fundo = styled.div`
    background-image: url('/fundo.png');
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
 
`