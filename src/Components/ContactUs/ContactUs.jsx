import { Form, H1, FormContainer, Input, StyledTextArea, StyledLabel, RegisterButton } from "./styles";

const ContactUs = (props) => {

  return (
    <FormContainer >
      <H1>Fale conosco</H1>
      <Form>
        <StyledLabel>Nome:
          <Input />
        </StyledLabel>
        <StyledLabel>E-mail:
          <Input type={"email"}/>
        </StyledLabel>
        <b>Mensagem:</b>
        <StyledTextArea></StyledTextArea>        
        <RegisterButton onClick={() => props.changePage(1)}>Enviar</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default ContactUs;