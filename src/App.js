import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { createGlobalStyle } from "styled-components";
import {
  MainContent,
  CardsGrid,
  CartContainer,
  NavFilters,
  MainContentWrapper,
  AsideContent,
  Body,
  OrderContainer,
} from "./styled";
import Cards from "./components/cards/Cards";
import games from "./components/games/games.json";
import Cart from "./components/cart/Cart";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [searchByName, setSearchByName] = useState("");
  const [order, setOrder] = useState("");
  const [minValueOrder, setMinValueOrder] = useState("");
  const [maxValueOrder, setMaxValueOrder] = useState("1000000000");
  const [cartList, setCartList] = useState([]);

  const addGameOnCart = (item) => {
    const newCart = [...cartList];
    const gameAdd = item;
    const findGameFromCart = newCart.find((i) => {
      return i.id === gameAdd.id;
    });
    if (findGameFromCart) {
      findGameFromCart.quantity++;
      findGameFromCart.totalprice =
        findGameFromCart.quantity * findGameFromCart.price;
    } else {
      newCart.push({ ...gameAdd, quantity: 1, totalprice: gameAdd.price });
    }
    setCartList(newCart);
  };

  const onChangeMinValueOrder = (e) => {
    setMinValueOrder(e.target.value);
  };
  const onChangeMaxValueOrder = (e) => {
    setMaxValueOrder(e.target.value);
  };
  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    if (cartList.length > 0) {
      const cartListString = JSON.stringify(cartList);
      localStorage.setItem("cartList", cartListString);
    }
  }, [cartList]);

  useEffect(() => {
    const newCartForStorage = JSON.parse(localStorage.getItem("cartList"));
    if (newCartForStorage !== null) {
      setCartList(newCartForStorage);
    }
  }, []);

  return (
    <div>
      <Body>
        <Header searchByName={searchByName} setSearchByName={setSearchByName} />
        <MainContent>
          <MainContentWrapper>
            <CardsGrid>
              {games
                .filter((game) => {
                  return game.name
                    .toLowerCase()
                    .includes(searchByName.toLowerCase());
                })
                .filter((game) => {
                  if (
                    game.price >= parseInt(minValueOrder) &&
                    game.price <= parseInt(maxValueOrder)
                  ) {
                    return game;
                  } else if (maxValueOrder === "" || minValueOrder === "") {
                    return game;
                  }
                })
                .sort((a, b) => {
                  if (order === "Crescente") {
                    return parseInt(a.price) > parseInt(b.price) ? 1 : -1;
                  } else if (order === "Decrescente") {
                    return parseInt(a.price) < parseInt(b.price) ? 1 : -1;
                  }
                })
                .map((game) => {
                  return (
                    <Cards
                      key={game.id}
                      id={game.id}
                      name={game.name}
                      price={game.price}
                      quantity={game.quantity}
                      img={game.imageUrl}
                      addGameOnCart={addGameOnCart}
                    />
                  );
                })}
            </CardsGrid>
            <AsideContent>
              <NavFilters>
                <p>Filtros: </p>
                <div>
                  <label>
                    <input
                      type="number"
                      onChange={onChangeMinValueOrder}
                      placeholder="Mínimo"
                    />
                  </label>
                  <span> - </span>
                  <label>
                    <input
                      type="number"
                      onChange={onChangeMaxValueOrder}
                      placeholder="Máximo"
                    />
                  </label>
                </div>
              </NavFilters>
              <OrderContainer>
                <p>Ordenação: </p>
                <select onChange={onChangeOrder}>
                  <option value="">Ordenar</option>
                  <option value="Crescente">Crescente</option>
                  <option value="Decrescente">Decrescente</option>
                </select>
              </OrderContainer>
              <CartContainer>
                <span>Carrinho: </span>
                <Cart cartList={cartList} setCartList={setCartList} />
              </CartContainer>
            </AsideContent>
          </MainContentWrapper>
        </MainContent>
        <Footer />
        <GlobalStyled />
      </Body>
    </div>
  );
}

export default App;
