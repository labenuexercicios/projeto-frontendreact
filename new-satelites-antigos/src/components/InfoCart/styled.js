import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 90%;
  color: #d0d0d0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* border: 1px solid blue; */
  /* justify-content: space-evenly; */

  button{
    width: 100%;
    height: 32px;
    background-color: #101010;
    border: none;
    border-radius: 5px;
    color: white;
    /* margin-top: 14px; */
    cursor: pointer;
    &:hover{
      background-color: #151515;
    }
    &:active{
      background-color: black;
    }
  }

  .box{
    height: 30%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;

    div{
      display: flex;
      justify-content: space-between;
    }
  }
  .total{
    font-size: 20px;
    margin-top: 20px;
  }
`