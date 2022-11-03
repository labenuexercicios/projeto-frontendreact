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
`
export const ContainerCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  max-width: 1200px;
  justify-content: flex-end;
  gap: 4vw;
  padding: 10px 0;
`
