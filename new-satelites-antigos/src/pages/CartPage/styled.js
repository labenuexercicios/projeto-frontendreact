import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  position: relative;
  /* border: 1px solid green; */
`
export const Items = styled.div`
  width: 65%;
  height: ${props => props.listCart.length <= 3 ? "100%" : "245%"};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 6%;
  /* border: 1px blue solid; */
`
export const Infomation = styled.div`
  width: 35%;
  height: 100%;
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 5px solid blue; */
  position: sticky;
  top: 0;
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