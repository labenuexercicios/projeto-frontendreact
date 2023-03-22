import styled from "styled-components"

export const ContainerFinalizado = styled.div`
    width: 50%;
    margin: 15px 0 ;
    min-height: 200px;
    border-radius: 10px;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin:  0 0 460px 0;
  
    h1,h2,h3{
    text-align: center;
    }

    div:last-child{
        display: flex;
        justify-content: center;
    }

    button{
        background-color: Black;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 30%;
        height: 40px;
        border: none;
    }


`