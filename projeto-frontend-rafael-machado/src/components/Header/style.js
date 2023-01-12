import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 20vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
       
div:first-child{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    img{
        width: 200px;
        margin-left: 50px;
    }
   }

div:nth-child(2){
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    h1{
        color: white;
    }
       
   input{
    height: 15%;
    width: 70%;
    margin-top: 50px;
    margin-bottom: 80px;
    padding-left: 10px;
   }
}
div:nth-child(3){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 20%;
        height: 70%;  
        border: solid 1px; 
        border-radius: 8px; 
        background-color: lightslategray ;
    h2{
        color: white;
        width: 250px;      
    }   
    h3{
        color: white;
        width: 250px; 
    }
    p{
        color: white;
        width: 250px; 
    }
    button{
        background-color: orange;
        font-size: 16px;
        color: white;
        width: 70%;
        height: 40px;
        border-radius: 8px;
        border: none     
    }
    button:hover{
        cursor: pointer;
        background-color: orangered;
        transform: scale(1.1);
    }
        
}

`
