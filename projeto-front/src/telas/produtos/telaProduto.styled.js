import styled from "styled-components";

export const Main = styled.main`

  /* margin:0 auto ; */

 
 section{
    display: flex;
    flex-wrap: wrap;
    justify-content:center ;
    gap: 120px;

    
 }

  .nav-produto{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 95vw;
    margin:0 auto ;
    margin-top: 20px;
    border-radius: 8px;
    
    background-color: #0C8CE9;

    .pesquisar{
      
        width: 400px;
        height: 35px;
        border-radius: 30px;
        text-align: center;

    }

    h1{
      margin-right: 120px;
    }

    input{
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0 0 5px gray;
      height: 30px;
    }
    .crescente{
      border-radius: 6px;
    }
  }

`