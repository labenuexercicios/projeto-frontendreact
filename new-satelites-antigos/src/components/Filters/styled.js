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
  >button{
    width: 30%;
    height: 25px;
    background-color: #303030;
    border: none;
    color: #d0d0d0;
    font-variant: all-small-caps;
    font-size: 16px;
  }
`
export const Filter = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 100px;
  /* height: 150px; */
  background-color: #303030;
  padding: 15px 20px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.4);
  /* font-variant: all-small-caps; */
  text-transform: uppercase;
  font-size: 14px;
  color: #d0d0d0;
  /* color: white; */
  p{
    overflow-y: hidden;
  }
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
  input{
    height: 24px;
    width: 88%;
    background-color: #202020;
    border: none;
    color: white;
  }
  img{
    height: 24px;
    width: 12%;
    padding: 4px;
    opacity: 0.5;
  }
`

export const DivInputRadio = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  /* border: 1px solid red; */

  input{
    background-color: black;
  }
`
export const DivRanger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 90%;
  /* border: 1px solid red; */

  .values{
  /* background-color: #3264fe; */
    width: 50%;
    height: 50%;
    border-radius: 5px;
    text-align: center;
    /* font-weight: bold; */
    font-size: 16px;
    /* color: #ffffff; */
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .container{
    position: relative;
    width: 100%;
    height: 50%;
    /* border: 1px solid green; */

  /* barra do input */
  div{
    width: 100%;
    height: 5px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: gray;
  }

}

  input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
  }
  input::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #d0d0d0;
    pointer-events: auto;
  }
  input:active::-webkit-slider-thumb{
  background-color: #ffffff;
  border: 3px solid #606060;
  }

  #slider-1{
  left: 0;
  width: 90%;
} 
#slider-2{
  right: 0;
  /* border: 1px solid red; */
  width: 90%;
  } 
`