import styled from "styled-components"

export const ConteinerCloseCart = styled.main`
height:100vh;
background-color:blue;
display:flex;
flex-direction:column;
align-items:center;


.header-close-order{
border:1px black solid;
display:flex;
justify-content:center;

width:100vw;

 > h1{
    margin-right:auto;
 }





}
.main-close-order{
    border: 1px solid red;
    display:flex;
    width:100vw;
    justify-content:space-between;
    background-color:white;
    padding:16px 32px;

   
    .steps-slidedown{
        border: 1px solid green;
        display:flex;
        flex-direction:column;
        background-color:green;
        width:80vw;
            .adress{
                background-color:grey;
                display:flex;
               
            }
            .payment{
                background-color:lightgreen;
                display:flex;
            }
            .itens-review{
                background-color:cyan;
                display:flex;

            }
            

    }

    .side-resume{
    border: 1px solid yellow;


    }
}




`