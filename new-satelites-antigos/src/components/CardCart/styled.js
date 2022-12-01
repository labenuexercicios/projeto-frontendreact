import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 110px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px red solid; */

  .image-card{
    overflow-y: hidden;
    position: absolute;
    height: 110px;
    width: 150px;
    left: 50px;
    box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.8);
    /* border-radius: 50%; */

    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .info-card{
    width: 90%;
    height: 100px;
    /* margin-left: 130px; */
    padding-left: 170px;
    /* background: linear-gradient(90deg, rgba(36,36,36,1) 0%, rgba(128,128,128,1) 100%, rgba(0,0,0,1) 100%); */
    /* background: linear-gradient(90deg, rgba(71,71,71,1) 0%, rgba(92,92,92,0.8) 38%, rgba(45,45,45,0.1) 100%); */
    background-color: #404040;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
    border: none;
  }
  button:hover{
    opacity: 0.9;
  }
  h4{
    color: white;
  }
`

export const Delete = styled.button`
  height: 22px;
  width: 70px;
  justify-self: end;
  cursor: pointer;
  border: none;
`
