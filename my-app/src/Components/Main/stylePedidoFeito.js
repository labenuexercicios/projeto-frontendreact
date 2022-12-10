import styled from "styled-components"

export const ContainerFinalizado = styled.div`
    width: 60%;
    min-height: 400px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgb(191,191,191);
    display: flex;
    flex-direction: column;
    background-color: #FFFE91;
    color: #5A2455;
    justify-content: space-around;
  
    h1,h2,h3{
    text-align: center;
    }

    div:last-child{
        display: flex;
        justify-content: center;
    }

    button{
        background-color: #A94DF3;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 80%;
        height: 40px;
        border: none;
    }

    button:hover{
        cursor: pointer;
        background-color: #AA7DFC;
    }
`