import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  height: 78vh;
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
  height: 100%;
`
export const ContainerFilterArea = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;  
`
export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  min-height: 400%;
  gap: 2vw;
  padding: 40px 0;
  background-color: rgba(0, 0, 0, 0.8);
  /* border: 1px solid green; */
  /* overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth; */
`
export const BackgroundCard = styled.div`
  width: 100%;
  height: 225px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* scroll-snap-align: start; */

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
