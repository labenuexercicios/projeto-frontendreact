import { ContainerStyled, DropDowOrdenation, Line } from "./Style";

export default function Ordenation(props) {
  function handleChange(e) {}
  return (
    <ContainerStyled>
      <DropDowOrdenation
        onChange={(e) => {
          props.setOrdena(e.target.value);
        }}
      >
        <option></option>
        <option>Rising price</option>
        <option>Decreasing price</option>
      </DropDowOrdenation>
      <Line></Line>
    </ContainerStyled>
  );
}
