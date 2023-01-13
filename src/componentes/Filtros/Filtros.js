import { Container, ContainerSearch, ContainerFilters, SelectOrder, Input, InputName } from "./style";

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
      <ContainerSearch>
        <InputName id="SearchName" onChange={onChangeSearch} placeholder="Buscar..."></InputName>
      </ContainerSearch>
      <ContainerFilters>
        <SelectOrder
          id="Category"
          onChange={onChangeCategory}
          value={props.category}
        >
          <option value="">Busca por Categoria</option>
          {productsTypesArray.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </SelectOrder>

        <SelectOrder
          id="Order"
          onChange={onChangeOrder}
          value={props.orderFilter}
        >
          <option value="Escolha">Ordenação por preço</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </SelectOrder>


        <Input
          id="ValueMin"
          type="number"
          onChange={onChangeValueMin}
          value={props.valueMin}
          placeholder="Valor minimo"
        ></Input>


        <Input
          id="ValueMax"
          type="number"
          onChange={onChangeValueMax}
          value={props.valueMax}
          placeholder="Valor máximo"
        ></Input>
      </ContainerFilters>
    </Container>
  );
}
