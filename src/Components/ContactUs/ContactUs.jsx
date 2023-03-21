import { Form, H1, FormContainer, Input, StyledTextArea, StyledLabel, RegisterButton } from "./styles";

const ContactUs = (props) => {

  return (
    <FormContainer >
      <H1>Fale conosco</H1>
      <Form>
        <StyledLabel>Nome:
          <Input 
          value={props.names}
          onChange={(e)=>{props.setNames(e.target.value)}}
          />
        </StyledLabel>
        <StyledLabel>E-mail:
          <Input 
          value={props.email}
          onChange={(e)=>{props.setEmail(e.target.value)}}
          type={"email"}
          />
        </StyledLabel>
        <b>Mensagem:</b>
        <StyledTextArea></StyledTextArea>        
        <RegisterButton onClick={() => props.changePage(7)}>Enviar</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default ContactUs;