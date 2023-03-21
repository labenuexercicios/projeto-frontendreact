import { Form, FormContainer, H1, Input, StyledLabel, SendButton, BackToLoginButton } from "./styles";

const RegisterPage = (props)=> {

  const handleSubmit=(event)=> {
    event.preventDefault();
    if (props.password !== props.confirmPassword) {
      alert('As senhas não coincidem!');
    } else {
      alert("Senha salva com sucesso!")
    }
  }

  return (
    <FormContainer>
      <H1>Cadastro </H1>
      <Form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input 
          value={props.names}
          onChange={(e)=>{props.setNames(e.target.value)}}
          id="titulo" 
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input
          value={props.email}
          onChange={(e)=>{props.setEmail(e.target.value)}} 
          id="foto" 
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input
          value={props.password}
          onChange={(e)=>{props.setPassword(e.target.value)}} 
          id="descricao" 
          type={"password"}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input 
          value={props.confirmPassword}
          onChange={(e)=>{props.setConfirmPassword(e.target.value)}}
          id="descricao" 
          type={"password"}
          />
        </StyledLabel>
        <SendButton type="submit" onClick={() => props.changePage(4)}>Próxima Página</SendButton>
        <BackToLoginButton onClick={() => props.changePage(2)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default RegisterPage;