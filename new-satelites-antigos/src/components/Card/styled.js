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
  text-align: justify;
  font-size: 18px;
  color: #d0d0d0;
  font-variant: all-small-caps;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a{
    text-decoration: none;
    color: #d0d0d0;
    font-size: 15px;
    z-index: 1;
    &:hover{
      color: #dbdbdb;
      transition: color 0.3s ease-in-out;
    }
  }
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
  gap: 5px;
  transform: rotate(270deg);
  h3{
    font-size: 52px;
    margin-left: 5px;
    font-family: fantasy;
    color: white;
  }
  div{
    width: 100px;
    margin-top: 10px;
    background: linear-gradient(270deg, #303030 50%, rgba(128,128,128,1) 100%, rgba(46,46,47,1) 100%);
  }
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

  h1{
    /* color: #D2D0D0; */
    color: white;
    font-size: 14px;
  }

  button{
    width: 70px;
    height: 16px;
    border-radius: 5px;
    border: none;
    color: #101010;
    font-size: 11px;
    background-color: #A4A4A4;
    font-weight: bold;
    cursor: pointer;
    &:hover{
      background-color: #959595;
      /* color: #dbdbdb; */
      color: white;
      font-weight: bolder;
      transition: background-color 0.3s ease-in-out;
      transition: color 0.3s ease-in-out;
    }
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 14px;
  color: #E1B650;
  font-weight: bold;

  > img {
    height: 12px;
  }
`

export const HideButton = styled.button`
  height: 32px;
  width: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 15px 10px 0;
  background-color: #303030;
  border: none;
  p{
    cursor: pointer;
    color: gray;
    font-size: 24px;
    &:hover{
      color: #dbdbdb;
      transition: color 0.3s ease-in-out;
    }
  }
`