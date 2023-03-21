import { Form, FormContainer, H1, Input, StyledLabel, SendButton} from "./styles";

const AddressRegisterPage=(props) => { 
  return (
    <FormContainer>
      <H1>Cadastro de Endereço</H1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input 
          id="endereco"
          value={props.address}
          onChange={(e)=>{props.setAddress(e.target.value)}} 
          />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número:
          <Input 
          value={props.number}
          onChange={(e)=>{props.setNumber(e.target.value)}}
          type="Number" 
          id="numero" 
          />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input 
          value={props.complement}
          onChange={(e)=>{props.setComplement(e.target.value)}}
          id="complemento" 
          />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input 
          value={props.phone}
          onChange={(e)=>{props.setPhone(e.target.value)}}
          type="Number"
          id="telefone"
          />
        </StyledLabel>
        <SendButton onClick={() => props.changePage(5)}
        >Cadastrar</SendButton>        
      </Form>
    </FormContainer>
  );
}

export default AddressRegisterPage;