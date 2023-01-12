import styled from "styled-components"

export const Container = styled.div`
    margin-top: 200px;
    width: 60%;
    min-height: 400px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: gray;
    color: white;
    justify-content: space-around;
  
    h1,h2{
    text-align: center;
    }
    div:last-child{
        display: flex;
        justify-content: center;
    }
    button{
        background-color: orange;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 50%;
        height: 40px;
        border: none;
    }

    button:hover{
        cursor: pointer;
        background-color: orangered;
    }`