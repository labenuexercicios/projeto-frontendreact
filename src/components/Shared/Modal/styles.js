import styled from "styled-components";

export const ModalContainer = styled.div`
  display: sticky;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  .text-box {
    position: relative;
    background-color: var(--details);
    background-image: url("./images/vichy.png");
    width: 600px;
    height: 600px;
    border-radius: 50px;
    margin: auto;
    box-shadow: inset 10px 0 50px rgba(0 , 0 , 0 , 0.3);
    padding:1%;
    margin-top:5%;
    overflow:hidden;
    img {
      position: absolute;
      width: 400px;
      left:-150px;
      bottom:200px;
      z-index:2;
    }
    h2 {
      font-family: "Style Script", cursive;
      color: #fc7300;
    font-size: 150px;
    text-shadow: rgb(255 190 136) 2px 2px 0px, rgb(7 33 76) 1px 8px 0px;
      text-align: center;
    }
    button {
        position:absolute;
        background:none;
        border:none;
        font-size:50px;
        right: 20px;
        color:var(--off-white);
        cursor:pointer;
    }
    button:hover{
        transition: 0.2s;
        color:red;
        transform:scale(1.2)
    }
    button:active{
        color:var(--off-white);
        transform:scale(1);
    }
  }
  .text {
      width: 80%;
      margin: auto;
      margin-top: 10%;
      font-size: 40px;
      padding:20px;
      border-radius:40px;
      background-color: var(--off-white);
      background-image: url("https://www.transparenttextures.com/patterns/otis-redding.png");
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      z-index:2;
      p {
        font-family: 'Playfair Display', serif;
        line-height:46px;
      }
  }
`;
