import React from "react";
import {
  Container,
  Input,
  InputMinPrice,
  InputMaxPrice,
  Div,
  P,
  Select,
} from "./styles";

const Filter = (props) => {
  const onChangeBuscaNome = (e) => {
    props.setBuscaNome(e.target.value);
  };

  const onChangeMinPrice = (e) => {
    props.setMinPrice(e.target.value);
  };

  const onChangeMaxPrice = (e) => {
    props.setMaxPrice(e.target.value);
  };

  const onChangeOrdenar = (e) => {
    props.setOrdenar(e.target.value);
  };

  return (
    <Container>
      <Div>
        <P>
          Satélites
          <br /> de Ana<br></br>
          <img
            src="image/satellite.png"
            alt="delete"
            width="70vw"
            height="70vh"
          />
        </P>
      </Div>

      <label>
        Investimento Mínimo:
        <InputMinPrice
          type="number"
          placeholder="0"
          onChange={onChangeMinPrice}
          value={props.minPrice}
        />
      </label>

      <label>
        Investimento Máximo:
        <InputMaxPrice
          type="number"
          placeholder="35"
          onChange={onChangeMaxPrice}
          value={props.maxPrice}
        />
      </label>

      <Input
        type="text"
        placeholder="Buscar por nome"
        onChange={onChangeBuscaNome}
        value={props.buscaNome}
      />

      <Select onChange={onChangeOrdenar}>
        <option value="">Investimento</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </Select>
    </Container>
  );
};

export default Filter;
