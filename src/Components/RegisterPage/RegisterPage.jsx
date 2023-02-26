import { Form, FormContainer, H1, Input, StyledLabel, SendButton, BackToLoginButton } from "./styles";

const RegisterPage = (props)=> {
  return (
    <FormContainer>
      <H1>Cadastro </H1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.changePage(4)}>Próxima Página</SendButton>
        <BackToLoginButton onClick={() => props.changePage(2)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default RegisterPage;