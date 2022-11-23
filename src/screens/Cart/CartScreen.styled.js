import styled from "styled-components"

export const Main = styled.main`
    section {
       
        
            display: flex;
            flex-wrap: wrap;
            // align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 60vh;
            // justify-content: space-between;
            z-index: 10;
            margin-top: 15vh;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
            background: white;
          }
          h1 {            

            }
          
       
       
       
       
        // display: flex;
        // flex-wrap: wrap;

        // h1, hr {
        //     width: 100%;
        // }

        // h1 {
        //     margin-top: 32px;
        // }

        // hr {
        //     margin-top: 16px;
        //     margin-bottom: 16px;
        // }
    }
    .TotalCompra{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 100px
      
    }
    .TotalCompra button{
      width: 120px;
      height:2vw;
    }
   
`