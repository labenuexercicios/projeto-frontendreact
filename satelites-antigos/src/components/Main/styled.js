import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  min-height: 74vh;
  width: 100vw;
  background-color: #181818;
`
export const ContainerFilterCard = styled.div`
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
  /* border: 1px solid white; */
  background-color: #242424;
  padding: 40px 0;
`
export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  gap: 4vw;
  padding: 40px 0;
`
export const CardName = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Name = styled.p`
  position: absolute;
  color: #353535;
  font-size: 24px;
  width: 85%;
  /* font-variant: small-caps; */
  text-align: center;
  /* font-variant: all-small-caps; */
  font-family: 'Pinyon Script', cursive;
`
