import styled from "styled-components";

export const ContainerConfirm = styled.div`
      /* border: 2px solid white; */
      min-height: 82vh;
     display: flex;
     justify-content: center;
     align-items: center;
`

export const CardConfirm = styled.div`
  /* border: 2px solid yellow; */
  background-color: rgba(0, 0, 0, 0.729);
  box-shadow: 4px 6px 26px -3px rgba(255,255,255,1);
  border-radius: 12px;
  width: 50vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  color: white;
  position: relative;
`

export const ImageConfirm = styled.img`
/* border: 2px solid white; */
  height: 20vh;
  width: 12vw;
  position: absolute;
  top: 2vh;
`

export const InfoConfirm = styled.div`
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10vh;
    gap: 16px;
`

export const HeadConfirm = styled.div`
  /* border: 2px solid blue; */
  color: white;
  width: 50vw;
  text-align: center;
  
`

export const ButtonReturn = styled.button`
  /* border: 2px solid red; */
  color: white;
  width: 20vw;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: orange;
`
