import { Container, SelectOrder, Input, InputName, Label } from "./style";

export default function Filtros(props) {
  const productsTypesArray = [
    "nave",
    "roupas espaciais",
    "meteoritos",
    "viagens espaciais"
  ];

  const onChangeSearch = (e) => {
    props.setPesquisa(e.target.value);
  };

  const onChangeOrder = (e) => {
    props.setOrderFilter(e.target.value);
  };

  const onChangeValueMin = (e) => {
    props.setValueMin(e.target.value);
  };

  const onChangeValueMax = (e) => {
    props.setValueMax(e.target.value);
  };

  const onChangeCategory = (e) => {
    props.setCategory(e.target.value);
  };

  return (
    <Container>
      <Label htmlFor="Category">Categoria:</Label>
      <SelectOrder
        id="Category"
        onChange={onChangeCategory}
        value={props.category}
      >
        <option value="">Selecione uma Categoria</option>
        {productsTypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </SelectOrder>
      <Label htmlFor="Order">Ordenação:</Label>
      <SelectOrder
        id="Order"
        onChange={onChangeOrder}
        value={props.orderFilter}
      >
        <option value="Escolha">-- Escolha --</option>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </SelectOrder>

      <Label htmlFor="ValueMin">Valor mínimo:</Label>
      <Input
        id="ValueMin"
        type="number"
        onChange={onChangeValueMin}
        value={props.valueMin}
      ></Input>

      <Label htmlFor="ValueMax">Valor maxímo:</Label>
      <Input
        id="ValueMax"
        type="number"
        onChange={onChangeValueMax}
        value={props.valueMax}
      ></Input>

      <Label htmlFor="SearchName">Busca por nome:</Label>
      <InputName id="SearchName" onChange={onChangeSearch}></InputName>
    </Container>
  );
}
