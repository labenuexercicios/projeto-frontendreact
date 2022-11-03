import styled from "styled-components";

export const ContainerFilterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 90%;
  color: gray;
  position: relative;
`

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 4px;
  width: 75%;
  border: 1px solid black;
  /*&:after{
    position: absolute;
    bottom: 0;
    top: 0;
    /* left: 0;
    right: 0;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  } */
  &:hover{
    border: 1px solid gray;
    transition: border 0.8s ease-out;
    /* transform: scaleX(1); */
  }
`

export const Input = styled.input`
  height: 24px;
  width: 88%;
  background-color: black;
  border: none;
  /* border-right: none; */
`
export const ImgLupa = styled.img`
  height: 24px;
  width: 12%;
  padding: 4px;
  background-color: black;
  /* border: 1px solid gray;
  border-left: none; */
`
