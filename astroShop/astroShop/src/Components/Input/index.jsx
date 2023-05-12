/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Input = ({ id, label, type, name, children }) => {
  return (
    <Container>
      <input type={type} name={name} id={id} placeholder=' '/>
      <label htmlFor={id}>{label}</label>
      {children}
    </Container>
  )
}

export default Input;