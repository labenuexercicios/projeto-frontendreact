import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";
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

function LoginScreen(props) {

  const sendLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>Senha:
          <Input type={"password"}/>
        </StyledLabel>
        <SendButton onClick={sendLogin}>Entrar</SendButton>
        <RegisterButton onClick={() => props.changeScreen(2)}>Cadastre-se</RegisterButton>
        <BackToLoginButton onClick={() => props.turnBackToList()}>Voltar para o início</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default LoginScreen;
