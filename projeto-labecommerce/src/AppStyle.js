import styled from 'styled-components'
import newImage from './assets/images/newImage.jpg'




export const MainContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    height: 100vh;
    background: url(${newImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    justify-content: space-between;
    
`