import { Header } from "../Header/Header";
import {Footer} from "../Footer/Footer"
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 78vh;
  width: 100vw;
  position: relative;
`
const Background = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  /* border: 1px solid red; */
`
export const Layout = (props) => {

  return (
    <>
      <Header/>
      <Main>
        <Background src="https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Container>
          {props.children}
        </Container>
      </Main>
      <Footer/>
    </>
  )
}