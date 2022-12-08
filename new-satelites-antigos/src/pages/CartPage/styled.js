import styled from "styled-components";

export const Cart = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  justify-content: space-evenly;
`
export const Items = styled.div`
  width: 55%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  /* border: 1px blue solid; */
`
export const Infomation = styled.div`
  width: 35%;
  min-height: 100%;
  position: static;
  top: 0;
  color: white;
  background-color: #202020;
  div{
    height: 50%;
    
  }
`

export const EmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    color: #d0d0d0;
    font-size: 24px;
  }
`