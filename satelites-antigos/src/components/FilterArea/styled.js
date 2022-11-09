import styled from "styled-components";

export const ContainerFilterArea = styled.div`
  width: 95%;
  margin-right: auto;
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
  width: 100%;
`
export const Filter = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 100px;
  background-color: #303030;
  padding: 15px 20px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4);
  /* font-variant: all-small-caps; */
  text-transform: uppercase;
  font-size: 14px;
`
export const DivInput = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 4px;
  width: 100%;
  background-color: #202020;
  border: 1px solid #202020;
  &:hover{
    border: 1px solid gray;
    transition: border 0.8s ease-out;
  }
`

export const InputText = styled.input`
  height: 24px;
  width: 88%;
  background-color: #202020;
  border: none;
  color: white;
  /* &:active{
    border: 1px solid red;
  } */
`
export const DivInputRadio = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`
export const InputRadio = styled.input`
  background-color: black;
`
export const ImgLupa = styled.img`
  height: 24px;
  width: 12%;
  padding: 4px;
  opacity: 0.5;
`
