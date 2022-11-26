import styled from "styled-components";

export const Cart = styled.div`
  min-height: 100%;
  width: 80%;
  background-color: gray;
  display: flex;
  justify-content: space-evenly;
  `
export const ItemCart = styled.div`
  width: 45%;
  height: 100%;
  border: 1px blue solid;

`
export const InfoCart = styled.div`
  width: 45%;
  height: 100%;
  border: 1px blue solid;

`
export const CardCart = styled.div`
  width: 100%;
  height: 35%;
  position: relative;
  display: flex;
  align-items: center;
  /* border: 1px red solid; */

  .image-card{
    overflow-y: hidden;
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;

    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .info-card{
    width: 80%;
    height: 100px;
    margin-left: 130px;
    padding-left: 40px;
    background: linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(128,128,128,1) 100%, rgba(46,46,47,1) 100%);
    display: flex;
    /* border: 1px red solid; */
  }

`
export const Info = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid blue; */
  gap: 5px;

  h1{
    color: #D2D0D0;
    font-size: 14px;
  }
  p{
    color: #D2D0D0;
    font-size: 12px;
  }
  span{
    font-size: 12px;
    color: #E1B629;
    font-weight: bold;
  }
`
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid blue; */
    p{
      color: white;
    font-size: 12px;

    }
  }
  button{
    width: 25px;
    height: 22px;
    color: black;
    cursor: pointer;
  }
  h4{
    color: white;
  }
`

export const EmptyCart = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    color: white;
    font-size: 32px;
  }
`