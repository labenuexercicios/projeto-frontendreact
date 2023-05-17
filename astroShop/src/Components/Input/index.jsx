/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

const Input = ({
  id,
  label,
  type,
  name,
  children,
  onChange,
  value,
  onlyNumbers,
}) => {
  const handleChange = (e) => {
    if (onlyNumbers) {
      const regex = /^[0-9\b]+$/;
      if (e.target.value === "" || regex.test(e.target.value)) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };
  return (
    <Container>
      <input
        type={type}
        name={name}
        id={id}
        placeholder=" "
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
      {children}
    </Container>
  );
};

export default Input;
