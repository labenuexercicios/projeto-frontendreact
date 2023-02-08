import styled from "styled-components";

export const MainStyled = styled.section`
  ${(props) => props.display}; 

  font-size: 17px;
  border: 1px solid black;
  margin: 16px;
  max-width: 15rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
  height: 270px;
  @media screen and (max-device-width: 1000px) 
  {
    justify-content:center;
    align-items: center;
  }
  @media screen and (max-device-width: 700px) 
  {
    max-width: 100%;
  }
`

export const ProductBlock = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
    //margin:  0;
  @media screen and (max-device-width: 700px) 
  {
    max-width: 245px;
  }
  img
  {
    height:150px;
    width:auto;
    border-radius: 10px;
  }
`

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AddCart = styled.button`
  padding: 0.5rem;
  margin: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: rgb(141, 225, 23);
  box-shadow: 0 6px 30px -10px #000000;
  &:hover 
  {
    font-size: 17px;
  }
  &:active 
  {
    background-color: white;
    font-size: 18px;
  }
`
export const PStyle = styled.p`
  color: white;
  text-shadow: -2px 0 black, 0 2px black,
        2px 0 black, 0 -2px black;
  font-size: 20px;
  padding-left: 5px;
  padding-top: 10px;
`

export const ButtonSize = styled.button`
  border: none;
  float: right;
  height: 30px;
  width: 30px;
  border: 2px solid black;
  border-radius: 15px;
  font-weight: bold;
  background: white;
  font-size: 15px;
  &:hover 
  {
    font-size: 21px;
  }
  &:active 
  {
    background-color: white;
    font-size: 20px;
  }
`

export const LabelSize = styled.label`
  display:flex;
  padding: 0px 20px 0px 20px;
  justify-content: space-around;
`

export const Input356 = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  &:after 
  {
    content: "";
    clear: both;
  }
`

export const Radio = styled.div`
  background: #fff no-repeat center center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`

export const LogoStyled = styled.img`
  justify-self: center;
  height: 17px;
`

