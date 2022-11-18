import styled from "styled-components";

export const Cart = styled.div`
  min-height: 100%;
  width: 80%;
  background-color: gray;
/* border: 1px red solid; */
`
export const ItemCart = styled.div`
  width: 50%;
  height: 155px;
  position: relative;
  display: flex;
  align-items: center;

  .image-cart{
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
  .info-cart{
    width: 80%;
    height: 100px;
    background-color: black;
    margin-left: 130px;
    padding-left: 40px;
    p{
    color: white;
    }

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