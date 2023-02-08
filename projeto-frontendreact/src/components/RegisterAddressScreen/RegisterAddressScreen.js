import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";
import React, {useState} from 'react'

function RegisterAddressScreen(props) {

const [address, setAddress] = useState("")
const [residence, setResidence] = useState("")
const [complement, setComplement] = useState("")
const [phone, setPhone] = useState("")


  const onChangeAddress = (event) => {
    setAddress(event.target.value)
  }
  
  const onChangeResidence = (event) => {
    setResidence(event.target.value)
  }
  
  const onChangeComplement = (event) => {
    setComplement(event.target.value)
  }
  
  const onChangePhone = (event) => {
    setPhone(event.target.value)
  }
  
  const sendData = () => {
          //verificar se algum campo ficou em branco
          if(address === "" || residence === "" || complement === "" || phone === "")
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
          <Input id="titulo" value={address} onChange={onChangeAddress}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número da residência:
          <Input id="foto" value={residence} onChange={onChangeResidence}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          complement:
          <Input id="descricao" value={complement} onChange={onChangeComplement}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          phone:
          <Input id="descricao" value={phone} onChange={onChangePhone}/>
        </StyledLabel>
        <SendButton onClick={() => sendData()}>Confirmar</SendButton>
        <BackToLoginButton onClick={() => props.changeScreen(2)}>Voltar</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default RegisterAddressScreen;
