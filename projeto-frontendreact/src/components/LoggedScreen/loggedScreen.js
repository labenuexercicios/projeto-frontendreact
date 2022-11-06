import { Div, Titulo } from "./styled";
import styled from "styled-components";

const BackToLoginButton = styled.button`
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    :hover{
        background-color: black;
        color: white;
    }
`

function loggedScreen (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={() => props.turnBackToList()}>Voltar</BackToLoginButton>
        </Div>
        
    )
}

export default loggedScreen;