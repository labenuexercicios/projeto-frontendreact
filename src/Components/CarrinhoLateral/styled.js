import styled from "styled-components"

export const BoxCarrinhoLateral = styled.div`
    width: 20%;
    padding-left: 10px;
    
    h2{
        color: #A94DF3;
    }
    button{
        background-color: #A94DF3;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 100%;
        height: 40px;
        border: none;
        transition: transform .3s;
    }
    button:hover{
        cursor: pointer;
        background-color: #AA7DFC;
        transform: scale(1.1);
    }
    div:hover{
        cursor: pointer;
        color: #A94DF3;
    }
    span{
        font-size: 12px;
    }
`
