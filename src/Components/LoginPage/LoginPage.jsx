import { Form, H1, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styles";

const LoginPage = (props) => {

  const loginSend = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <H1>LOGIN</H1>
      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>Senha:
          <Input type={"password"}/>
        </StyledLabel>
        <SendButton onClick={loginSend}>Entrar</SendButton>
        <RegisterButton onClick={() => props.changePage(3)}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;