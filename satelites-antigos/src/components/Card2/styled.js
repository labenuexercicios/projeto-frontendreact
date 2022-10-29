import styled from "styled-components";

export const ContainerCard = styled.div`
  height: 200px;
  width: 300px;
  position: relative;
  min-width: 180px;
  background-color: #303030;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  `

export const Description = styled.div`
  position: absolute;
  z-index: 0;
  padding: 0px;
  `
export const Name = styled.p`
  color: #D2D0D0;
  font-size: 14px;
  `
export const ImgSatelite = styled.img`
  width: 300px;
  height: 200px;
  min-width: 200px;
  position: absolute;
  z-index: 1;
`
export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px white solid; */
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 56px; 
`
export const Information = styled.div`
  background: linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(128,128,128,1) 100%, rgba(46,46,47,1) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
  width: 90%;
  box-shadow: 7px -5px 19px 1px rgba(0,0,0,0.52);
`
export const Detail1 = styled.div`
  width: 4px;
  height: 100%;
  background-color: #808080;
`
export const Detail2 = styled.div`
  width: 16px;
  height: 100%;
  background-color: #808080;
`
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  color: #E1B629;
  font-weight: bold;
`
export const ImgCoin = styled.img`
  height: 12px;
`
export const Button = styled.button`
  width: 70px;
  height: 16px;
  border-radius: 5px;
  border: none;
  color: #504F4F;
  font-size: 10px;
  background-color: #A4A4A4;
`