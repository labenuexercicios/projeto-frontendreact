import styled from "styled-components";

export const Main = styled.main`
margin-top: 50px;

section {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contato h1 {
    width: 100%;
    margin-top: 10px;
    margin-right: 1240px;
    }
    
    .compra p{
        color: #000000;
        padding: 0 .2em;
        font-family: 'Poppins';
        font-size: 1.3em;
        margin-top: 50px;
    }

    .compra a{
        color: #000000;
        padding: 0 .2em;
        font-family: 'Poppins';
        font-size: 1.3em;
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
    .sociais {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top:90px;
        cursor: pointer;
    

        a:link {
          text-decoration: none;
        }
        .box p{
          color: #1698FA;
          font-weight: bold;
        }
    }

    
    .icon-email {
      margin-left: 6px;
    }

    .icon-github p{
      margin-left: 18px;

    
      }
    }

    .gameplay {
      margin-top: 20px;
    }
`