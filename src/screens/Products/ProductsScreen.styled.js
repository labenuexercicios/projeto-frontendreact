import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
background-color: #513895;
}  
/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
`
export const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    align-content: center;  
    min-height: 100vh;
    border: 10px solid #000;
    background-color: #513895;
    
    .container {
     position: relative; 
     max-width: 1200px;
     flex-wrap: wrap;
     z-index: 1;
    } 

    .container .card {
      position: relative;
      width: 300px;
      height: 420px;
      margin: 30px;
      box-shadow: 20px 20px 50px rgba (0,0,0,0.5);
      border-radius: 15px;
      background: rgba(255,255,255,0.1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255,255,255,0.5);
      border-left: 1px solid rgba(255,255,255,0.5);
    }

    .container .card .content {
      padding: 20px;
      text-align: center;
      transition: 0.8s;
      
    }

    .container .card:hover .content {
      transform: translateY(-10px);
      opacity: 1;
    }

    .container .card .content h1 {
      font-size: 1.2em;
      color: black;
      z-index: 1;
    }
    .container .card .content h2 {
      font-size: 1.2em;
      margin-right:18px ;
      color: #fff;
      z-index: 1;
    }
    .container .card .content h3 {
      font-size: 1em;
    }
    .container .card .content h4 {
      font-size: 1em;
      color: white;
      z-index: 1;
    }
    .container .card .content .add-to-cart {
      position: relative;
      display: inline-block;
      padding: 8px 20px;
      background: #fff;
      color: #000;
      border-radius: 15px;
      font-weight: 500;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      cursor: pointer;
    }

  .container .card .content .add-to-cart:hover {
    background-color: #cfcdde;
    transition: 0.3s;
    transform: scale(1.25);
}

    .container .card .content .add-to-cart:active {
      background: #513895;
      color: white;
      cursor: pointer;
    }
  `

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    min-height: 12em;
    border-left: 10px solid black;
    border-right: 10px solid black;
    background-color: #513895;

    .search {
     width: 20em;
     height: 30px;
     border: none;

    }

    .search:active {
      border: none;
    }

    .search-button{
    display: flex;
    align-items: center;
     border-radius: 50%;
     border-radius: 5px;
     border: 3px solid black;
     align-self: center;
     color: white;
     background-color: white;

     button {
      border: none;
      opacity: 0.4;
     }
     
    }
    
    /* .search-button:hover {
      background-color: #cfcdde;
      transition: 0.3s;
      transform: scale(1.25);
    } */
    
    /* .search-button:active {
        background-color: #513895;
        color: white;
    } */
    
.price {
  display: flex;
  flex-direction: row;
  width: 15em;
  height: 23px;
  margin-right: 10em;
  gap: 0.5em;
  
}

.order-data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 20em;
  height: 23px;
  margin-left: 2em;

}
`

//   padding: 16px;
//   min-width: 400px;
//   max-width: 440px;
//   border-radius: 12px;
//   display: flex;
//   position: relative;
//   margin: 50px;
//   color: #ffffff; */
//    }
  
