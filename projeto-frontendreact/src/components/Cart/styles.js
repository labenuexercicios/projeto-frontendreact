import styled from "styled-components";

export const CartStyled = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: center;  
  @media screen and (max-device-width: 700px) 
  {
    ${(props) => props.display}
  }

`

export const PinRight = styled.div`
  position: fixed;
  @media screen and (max-device-width: 700px) 
  {
    position: static;
  }
`

export const ContainerList = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-device-width: 1000px) 
  {
    width: 30vw;
  }
  @media screen and (max-device-width: 700px) 
  {
    width: 70vw;
  }
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  background-color: white;
  transition: background-color 0.3s;
  &:hover 
  {
    background-color: lightblue;
  }
`

export const ItemTotal = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  background-color: white;
  transition: background-color 0.3s;
  &:hover 
  {
    background-color: lightblue;
  }
`

export const RemoveButton = styled.button`
  padding: 8px 8px 8px 8px;
  background-color: #de2f45;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivCart = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  img
  {
    justify-self: center;
    height: 30px;
    border-radius: 50px;
  }
  p
  {
    color: white;
    text-shadow: -2px 0 black, 0 2px black,
                  2px 0 black, 0 -2px black;
    font-size: 20px;
    padding-left: 5px;
  }
`