import styled from "styled-components";

export const Store = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  position: relative;
  /* border: 1px solid red; */
`
export const ContainerFilters = styled.div`
  display: flex;
  width: 30%;
  /* height: 100%; */
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;  
  `
export const BackgrondFilters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
  color: gray;
  position: absolute;
  width: 100%;
  height: 100%;
`

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  height: 400%;
  gap: 2vw;
  padding: 40px 0;
  /* width */
  /* border: 1px solid green; */

  /* background-color: rgba(0, 0, 0, 0.8);
  overflow-y: visible;
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
    /* font-family: 'Pinyon Script', cursive; */
  }
`