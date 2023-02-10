import styled from "styled-components"

export const Produto = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
width: 300px;
border: 5px solid darkslategray;
border-radius: 50px;

    >img{
        margin-top: auto;
        border-radius: 30px;
    }

    #info {
        display: flex;
        flex-direction: column;
        margin-top: auto;
        font-size: large;
        font-weight: bold;
        color: darkslategray;
        >button {
            color: antiquewhite;
            background-color: dimgray;
            align-self: center;
            border: none;
            border-radius: 10px;
            height: 2em;
            width: 75%;
            font-size: medium;
            font-weight: bold;
        }
    } 
`