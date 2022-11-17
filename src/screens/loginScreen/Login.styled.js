import styled from "styled-components"

export const ContainerForm = styled.main`
display:flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;


    form{
        display:flex;
        flex-direction:column;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        align-items:center;
        justify-content:center;
        min-width:30%;
        max-width:90%;
        padding: 32px 16px;

        >p{
            margin-top:4px;
            font-size:12px;
            color:red;
        }
        

        >div{
            display:flex;
            flex-direction:column;
        }
        .form-data{
            padding:32px;
            text-align:center;
            width:90%;

            >div{
                display:flex;
                justify-content:space-between;
                align-items:center;
                
                border-bottom:1px black solid;
                margin-bottom:8px;


            }
            img{
                height:28px;
            }
            .eye{
                height:16px;
                
            }
            input{
                width:100%;
                border:none; 
                outline:none;
            }


            button{
                border:none;
                border-radius:10px;
                background-color:blue;
                color:white;
                height:28px;

            }
         

            }
           
        }
      
        button{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top:16px;
            
        }
    }

    .buttonOutSide{
        width:80%;
        border-bottom:16px;
        >button{
            padding:2px;
            justify-content:space-around;
            align-items:flex-start;
            border-radius:20px;
            height:30px;;

            > img{
                height:100%;
            }
            

        }
    
    }


`