import React from 'react'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import styled from 'styled-components'
import background from '../../assets/sci-fi-deep-space-background-loop-free-video.jpeg';

const CointainerLayout = styled.body`
  /* border: 2px solid red; */
  background-image: url(${background});
`

const Main = styled.main`
  /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
 background-color: rgba(0, 0, 0, 0.2);
    width: 80%;
`

export const Layout = (props) => {

  return (
    <CointainerLayout>
    <Header/>
    <Main>
        <Container>
            {props.children}
        </Container>
    </Main>
    <Footer/>
    </CointainerLayout>
  )
}
