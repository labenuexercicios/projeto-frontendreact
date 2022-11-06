import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";
import React, {useState} from 'react'

function RegisterAddressScreen(props) {

const [endereco, setEndereco] = useState("")
const [residencia, setResidencia] = useState("")
const [complemento, setComplemento] = useState("")
const [telefone, setTelefone] = useState("")


  const onChangeEndereco = (event) => {
    setEndereco(event.target.value)
  }
  
  const onChangeResidencia = (event) => {
    setResidencia(event.target.value)
  }
  
  const onChangeComplemento = (event) => {
    setComplemento(event.target.value)
  }
  
  const onChangeTelefone = (event) => {
    setTelefone(event.target.value)
  }
  
  const sendData = () => {
          //verificar se algum campo ficou em branco
          if(endereco === "" || residencia === "" || complemento === "" || telefone === "")
          {
            alert("Todos os campos são obrigatórios")
          }
          else
          {
            props.changeScreen(4)
          }
        }

  return (
    <FormContainer>
      <h1>Informações pessoais</h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" value={endereco} onChange={onChangeEndereco}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número da residência:
          <Input id="foto" value={residencia} onChange={onChangeResidencia}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" value={complemento} onChange={onChangeComplemento}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="descricao" value={telefone} onChange={onChangeTelefone}/>
        </StyledLabel>
        <SendButton onClick={() => sendData()}>Confirmar</SendButton>
        <BackToLoginButton onClick={() => props.changeScreen(2)}>Voltar</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default RegisterAddressScreen;
