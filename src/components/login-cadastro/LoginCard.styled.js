import styled from "styled-components";

export const FormContainer = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:16px;
    p{
        
        font-size:0.625rem;
        color:red;
    }


    > div{ 
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        min-width:30vw;
        margin-bottom:16px;
        
        > div{
            width:100%;
            border-bottom:1px solid black;
            display:flex;
           
            div{
                width:100%;
            }


            input{
                width:calc(100% - 2rem);
                border:none;
                outline:none;
                padding-left:4px;

            }
            img{
                height:1rem;
            }

        }
        
     >span{
        color:red;
        font-size:0.625rem;
     }

    }
    button{
        width:100%;
        height:2rem;
        border-radius:16px;
        border:none;
        background-color:blue;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-top:16px;
    }
   padding-bottom:32px;

 .username{
    color:${(props)=>props.isUsernameValid?"black":"red"}
    

 }
 .email{
    color:${(props)=>props.isEmailValid?"black":"red"}
 }
 .password{
    color:${(props)=>props.isPasswordValid2?"black":"red"}

 }
 .password2{
    color:${(props)=>props.isPasswordValid2?"black":"red" }

 }

    







`