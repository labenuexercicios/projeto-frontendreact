import { useState } from "react";
import styled from "styled-components";
import { Products } from "../data";

/* styled components */

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContainer = styled.div`
  width: 200px;
  height: 350px;
  margin-top: 10%;
  position: relative;
  right: 60px;
  background-color: red;
  margin-left: 5px;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const ProductName = styled.p``;
const PriceProduct = styled.p``;
const Button = styled.button`
  width: 90%;
  margin-left: 7px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
const Filters = styled.div`
  position: fixed;
  left: 100px;
  top: 170px;
  width: 200px;
  height: 350px;
`;
const FilterPriceMin = styled.input`
  padding: 5px;
`;
const FilterPriceMax = styled.input`
  padding: 5px;
`;
const SearchName = styled.input`
  padding: 5px;
`;
const Cart = styled.div`
  position: fixed;
  border: 1px solid white;
  width: 300px;
  height: 530px;
  right: 0px;
  top: 20px;
`;
const Order = styled.div`
  position: fixed;
  left: 320px;
  top: 100px;
  bottom: 200px;
`;
const OrderSelect = styled.select`
  margin-left: 5px;
`;
const OrderOptions = styled.option``;

function Card() {
  const [name, setName] = useState("");
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const [minPrice, setMinPrice] = useState(-Infinity);
  const onChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const onChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };
  const [sortingParamenter, setSortParameter] = useState("title");
  const onchangeSorting = (event) => {
    setSortParameter(event.target.value);
  };

  return (
    <div>
      <Container Products={Products}>
        <Order>
          <label>Ordenação:</label>
          <OrderSelect onChange={(event) => onchangeSorting(event)}>
            <OrderOptions></OrderOptions>
            <OrderOptions value={"MaxPrice"}>Crescente</OrderOptions>
            <OrderOptions value={"MinPrice"}>Decrescente</OrderOptions>
          </OrderSelect>
        </Order>
        <Filters>
          <label htmlFor="">Valor mínimo</label>
          <FilterPriceMin
            type={"number"}
            onChange={(event) => onChangeMinPrice(event)}
          />
          <label htmlFor="">Valor máximo</label>
          <FilterPriceMax
            type={"number"}
            onChange={(event) => onChangeMaxPrice(event)}
          />
          <label htmlFor="">Buscar pelo Nome</label>
          <SearchName onChange={(event) => onChangeName(event)} />
        </Filters>

        {Products.filter((product) => product.name.includes(name))

          .filter((product) => {
            return product.price >= minPrice || minPrice === "";
          })

          .filter((product) => {
            return product.price <= maxPrice || maxPrice === "";
          })

          .sort((currentValue, nextValue) => {
            switch (sortingParamenter) {
              case "MaxPrice":
                return currentValue.price - nextValue.price;
              case "MinPrice":
                return nextValue.price - currentValue.price;
            }
          })

          .map((item) => (
            <CardContainer>
              <Image src={item.img} />
              <ProductName>{item.name}</ProductName>
              <PriceProduct>R$ {item.price}</PriceProduct>
              <Button>Adicionar no Carrinho</Button>
            </CardContainer>
          ))}
        <Cart>
          <p>Carrinho</p>
          <hr></hr>
        </Cart>
      </Container>
    </div>
  );
}
export default Card;
