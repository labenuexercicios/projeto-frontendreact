import styled from "styled-components";

export const ContainerFilterArea = styled.div`
  width: 90%;
  background-color: #202020;
  height: 100%;
  padding: 40px 0;
  `
export const DivFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
  color: gray;
  position: absolute;
  width: 92%;
`
export const Filter = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 85%;
  background-color: #303030;
  padding: 15px 20px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4);
  font-variant: all-small-caps;
  font-size: 18px;
`
export const DivInput = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 4px;
  width: 100%;
  border: 1px solid black;
  &:hover{
    border: 1px solid gray;
    transition: border 0.8s ease-out;
  }
`

export const Input = styled.input`
  height: 24px;
  width: 88%;
  background-color: black;
  border: none;
  color: white;
`
export const ImgLupa = styled.img`
  height: 24px;
  width: 12%;
  padding: 4px;
  background-color: black;
`
