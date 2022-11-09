import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  min-height: 78vh;
  width: 100vw;
  /* background-color: #181818; */
  position: relative;
`
export const ImgBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`
export const PageStore = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
`
export const ContainerFilterArea = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* background-color: #202020; */
  /* border: 1px solid white; */
  
`
export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  gap: 4vw;
  padding: 40px 0;
  background-color: rgba(0, 0, 0, 0.8);
  /* border: 1px solid red; */
`
export const BackgroundCard = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > p{
    position: absolute;
    color: #404040;
    font-size: 24px;
    width: 85%;
    /* font-variant: small-caps; */
    text-align: center;
    /* font-variant: all-small-caps; */
    font-family: 'Pinyon Script', cursive;
  }
`
