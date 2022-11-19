import styled from "styled-components"



export const ContainerMainForm = styled.main`

height:84vh;;
display:flex;
justify-content:center;
align-items:center;

`

export const ContainerForm = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
min-width:30%;

max-width:90%;
padding:32px;



.buttonOutSide{
    border-top:1px solid black;

    position:relative;
    width:100%;
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:4px;
    padding-top:32px;


    > span{
        position:absolute;
        text-align:center;
        width:40px;
        background-color:white;

        border-radius:50%;
       
        top:-10px;
        
    }
    
    button{

        width:80%;
        padding:4px;
        margin-bottom:16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:none;
        border-radius:20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        span{
            padding:2px 8px;
        }
        
        
    }
    

}


`