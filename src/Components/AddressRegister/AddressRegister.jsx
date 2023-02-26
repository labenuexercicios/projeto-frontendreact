import { Form, FormContainer, H1, Input, StyledLabel, SendButton} from "./styles";

const AddressRegisterPage=(props) => {
 
  return (
    <FormContainer>
      <H1>Cadastro de Endereço</H1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número:
          <Input type="Number" id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input type="Number" id="telefone" />
        </StyledLabel>
        <SendButton onClick={() => props.changePage(5)}
        >Cadastrar</SendButton>        
      </Form>
    </FormContainer>
  );
}

export default AddressRegisterPage;