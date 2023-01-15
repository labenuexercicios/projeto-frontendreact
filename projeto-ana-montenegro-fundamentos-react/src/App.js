import React, { useEffect, useState } from "react";

import { createGlobalStyle } from "styled-components";
import { Img } from "./styles";
import { Principal } from "./styles";
import { Produtos, Button } from "./styles";
import { H1 } from "./styles";
import { H2 } from "./styles";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";
import { Card } from "./styles";
import satellites from "./satellite/satellite.json";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   
  }
`;

const App = () => {
  const [ordenar, setOrdenar] = useState("");
  const [buscaNome, setBuscaNome] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const add = (satellite) => {
    const exist = cartItems.find((x) => x.id === satellite.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === satellite.id ? { ...exist, qt: exist.qt + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...satellite, qt: 1 }]);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const remove = (satellite) => {
    const exist = cartItems.find((x) => x.id === satellite.id);
    if (exist.qt === 1) {
      setCartItems(cartItems.filter((x) => x.id !== satellite.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === satellite.id ? { ...exist, qt: exist.qt - 1 } : x
        )
      );
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const removeFromCart = (satellite) => {
    const exist = cartItems.find((x) => x.id === satellite.id);
    if (exist.qt >= 1) {
      setCartItems(cartItems.filter((x) => x.id !== satellite.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === satellite.id ? { ...exist, qt: exist.qt - 1 } : x
        )
      );
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  let counter = 0;
  const addSatellite = () => {
    counter += 1;
    console.log(counter);
  };

  return (
    // <div>

    <Principal>
      <GlobalStyle />
      <Filter
        buscaNome={buscaNome}
        setBuscaNome={setBuscaNome}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        ordenar={ordenar}
        setOrdenar={setOrdenar}
      />
      <div>
        <H1>Adquira Cotas de Satélites </H1>

        <Produtos>
          <>
            {satellites
              .filter((satellite) => {
                return satellite.name
                  .toUpperCase()
                  .includes(buscaNome.toUpperCase());
              })

              .filter((satellite) => {
                return satellite.value >= minPrice || minPrice === "";
              })

              .filter((satellite) => {
                return satellite.value <= maxPrice || maxPrice === "";
              })

              .map((satellite) => {
                return (
                  <Card key={satellite.id}>
                    <H2>{satellite.name} </H2> <Img src={satellite.image} />{" "}
                    Investimento:R${satellite.value},00
                    <Button onClick={() => add(satellite)}>
                      Adicionar ao carrinho
                    </Button>
                  </Card>
                );
              })

              .sort((sat1, sat2) => {
                if (ordenar === "crescente") {
                  return sat1.value > sat2.value ? -1 : 1;
                } else if (ordenar === "decrescente") {
                  if (sat1.value < sat2.value) {
                    return 1;
                  } else {
                    return -1;
                  }
                }
              })}
          </>
        </Produtos>
      </div>

      <Cart
        add={add}
        remove={remove}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
      />
    </Principal>
  );
};

export default App;
