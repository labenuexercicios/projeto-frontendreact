import styled from "styled-components";

export const ContainerCard = styled.div`
  height: 192px;
  width: 274px;
  /* border: 1px solid black; */
  position: relative;
  min-width: 180px;
  background-color: #303030;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  `

export const Description = styled.div`
  position: absolute;
  z-index: 0;
  padding: 0px;
  `
export const InformSatelite = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
  background: linear-gradient(90deg, rgba(120,120,120,1) 0%, rgba(46,46,47,1) 100%, rgba(82,82,82,1) 100%);
  height: 24px;
  width: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 5px;
  gap: 5px;
  border-bottom-left-radius: 10px;
`
export const Name = styled.p`
  color: #D2D0D0;
  font-size: 12px;
  `
export const ImgSatelite = styled.img`
  padding: 5px;
  width: 20vw;
  min-width: 200px;
  position: absolute;
  z-index: 1;
  border-radius: 10px;
`
export const InformBuy = styled.div`
  background: linear-gradient(90deg, rgba(82,82,82,1) 40%, rgba(120,120,120,1) 100%, rgba(46,46,47,1) 100%);
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 60px;
  width: 120px;
  border-top-right-radius: 10px;
  box-shadow: 7px -5px 19px 1px rgba(0,0,0,0.52);
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
export const ButtonBuy = styled.button`
  width: 80px;
  height: 20px;
  border-radius: 5px;
  border: none;
  color: #504F4F;
  font-size: 10px;
  background-color: #A4A4A4;
`
export const ButtonInfo = styled.button`
  width: 16px;
  height: 16px;
  background-color: #404040;
  border: #707070 1px solid;
  border-radius: 10px;
  color: #707070;
`