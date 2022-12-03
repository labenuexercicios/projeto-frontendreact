import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Rajdhani:wght@300&display=swap');

export const BackgroundImg = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`
export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  /* border: 1px solid red; */
  
  .text{
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding-left: 8%;
    
    
    h1{
      text-transform: uppercase;
      font-weight: bold;
      font-size: 44px;
      color: white;
    }
    
    h2{
      color: #ededed;
      font-size: 28px;
    }
  }
  
  .image{
    width: 40%;
    height: 50%;
    display: flex;
    position: relative;
    /* justify-content: center; */
    /* border: 1px solid red; */

    div{
      overflow-y: hidden;
      border-radius: 50%;
      box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.6);
    }
    
    img{
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  
  .image1{
    position: absolute;
    top: 20px;
    height: 150px;
    width: 150px;
  }

  .image2{
    position: absolute;
    /* top: 90px; */
    bottom: 0;
    left: 60px;
    height: 120px;
    width: 120px;
  }

  .image3{
    position: absolute;
    /* top: 90px; */
    left: 130px;
    height: 200px;
    width: 200px;
  }
`

