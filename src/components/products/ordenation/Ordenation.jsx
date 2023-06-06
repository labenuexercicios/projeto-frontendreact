import {
  ContainerStyled,
  DropDowOrdenation,
  Line,
  OrdenationTitle,
} from "./Style";

export default function Ordenation(props) {
  return (
    <ContainerStyled>
      <OrdenationTitle>Ordenation</OrdenationTitle>
      <DropDowOrdenation
        onChange={(e) => {
          props.setOrdena(e.target.value);
        }}
      >
        <option></option>
        <option>Sort by lowest price </option>
        <option>Sort by highest price</option>
      </DropDowOrdenation>
      <Line></Line>
    </ContainerStyled>
  );
}
