import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";
import React, {useState} from 'react'

function registerScreen(props) {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [senhaConfirma, setSenhaConfirma] = useState("")


  const onChangeName = (event) => {
    setName(event.target.value)
  }
  
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  
  const onChangeSenha = (event) => {
    setSenha(event.target.value)
  }
  
  const onChangeSenhaConfirma = (event) => {
    setSenhaConfirma(event.target.value)
  }
  
  const sendData = () => {
          //verificar se algum campo ficou em branco
          if(name === "" || senha === "" || email === "" || senhaConfirma === "")
          {
            alert("Todos os campos são obrigatórios")
          }
          else
          {
            props.changeScreen(3)
          }
        }

  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" value={name} onChange={onChangeName}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" value={email} onChange={onChangeEmail}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" value={senha} onChange={onChangeSenha}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" value={senhaConfirma} onChange={onChangeSenhaConfirma}/>
        </StyledLabel>
        <SendButton onClick={() => sendData()}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.changeScreen(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default registerScreen;
