import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";


function TelaLogin(props) {

  const enviarLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <Header/>
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>Senha:
          <Input type={"password"}/>
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Entrar</SendButton>
        <RegisterButton onClick={() => props.mudarTela(2)}>Cadastre-se</RegisterButton>
      </Form>
      <Footer/>
    </FormContainer>
  );
}

export default TelaLogin;
