import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  height: 220px;
  /* width: 600px; */
  /* min-width: 300px; */
  background-color: #303030;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.7);
  /* border: 1px solid blue; */

  `

export const Description = styled.div`
  position: absolute;
  right: 0;
  z-index: 0;
  width: 300px;
  padding: 12px 55px 0 12px;
  font-size: 14px;
  text-align: justify;
  color: gray;
  font-variant: small-caps;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Anchor = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 10px;
  /* padding-left: 12px; */
  z-index: 1;
  &:hover{
    color: #dbdbdb;
    transition: color 0.3s ease-in-out;
  }
`
export const Name = styled.p`
  color: #D2D0D0;
  font-size: 14px;
  `
export const ImgSatelite = styled.img`
  width: 100%;
  min-width: 300px;
  max-width: 370px;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  -webkit-box-shadow: 4px 0px 8px 0px rgba(0,0,0,0.66); 
  box-shadow: 4px 0px 8px 0px rgba(0,0,0,0.5);
  /* border: 1px solid red; */

`
export const DivYear = styled.div`
  position: absolute;
  z-index: 2;
  opacity: 0.2;
  width: 220px;
  right: -90px;
  top: 25px;
  display: flex;
  /* border: 1px solid blue; */
  gap: 5px;
  /* background-color: gray; */
  /* padding: 0px 20px; */
  /* height: 70px; */
  /* background: linear-gradient(180deg, #303030 0%, rgba(128,128,128,1) 100%, rgba(46,46,47,1) 100%); */
  
  transform: rotate(270deg);
  `
export const Year = styled.h3`
  font-size: 52px;
  margin-left: 5px;
  font-family: fantasy;
  color: white;
`
export const DivDetail = styled.div`
  width: 100px;
  margin-top: 10px;
  background: linear-gradient(270deg, #303030 50%, rgba(128,128,128,1) 100%, rgba(46,46,47,1) 100%);

  /* background-color: gray; */
  /* border: 1px solid red; */
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
  min-width: 300px;
  max-width: 370px;
  height: 56px; 
`
export const Information = styled.div`
  background: linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(128,128,128,1) 100%, rgba(46,46,47,1) 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
  width: 82%;
  box-shadow: 7px -5px 19px 1px rgba(0,0,0,0.52);
`
export const Detail1 = styled.div`
  width: 4px;
  height: 100%;
  background-color: #808080;
`
export const Detail2 = styled.div`
  width: 42px;
  height: 100%;
  background-color: #808080;
  opacity: 0.5;

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
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background-color: #959595;
    color: #dbdbdb;
    font-weight: bolder;
    transition: background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }
`
export const HideButton = styled.button`
  height: 30px;
  width: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 15px 10px 0;
  background-color: #303030;
  border: none;
  color: gray;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color: #dbdbdb;
    transition: color 0.3s ease-in-out;
  }
`