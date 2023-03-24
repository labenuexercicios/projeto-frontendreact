import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <Header/>
      <h1>Cadastro Endereço </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Nº:
          <Input id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3)}>Cadastrar</SendButton>
      </Form>
      <Footer/>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;