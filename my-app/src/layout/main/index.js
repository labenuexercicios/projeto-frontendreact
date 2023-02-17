import { Container } from "../container";
import Card from "./cards";
import NavBar from "./nav-bar";
import {
  Content,
  FilterContent,
  Label,
  Options,
  Section,
  Selector,
  Separator,
} from "./styled";
import { useState } from "react";

function Main(props) {
  const { products, setIsOnOrder, order, setOrder } = props;

  return (
    <Container>
      <FilterContent>
        <Label>Ordenar:</Label>
        <Selector
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
            setIsOnOrder(true);
          }}
        >
          <Options value={"default"}>Relevância</Options>
          <Options value={"min"}>Menor preço</Options>
          <Options value={"max"}>Maior preço</Options>
        </Selector>
      </FilterContent>
      <Section>
        <NavBar />
        <Separator />
        <Content>
          {products.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </Content>
      </Section>
    </Container>
  );
}

export default Main;
