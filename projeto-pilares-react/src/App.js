import React, { useState, useEffect } from "react";

import Filters from "./components/Filters/Filters";
import { ListProducts } from "./components/ListProducts/ListProducts";
import { Cart } from "./components/Cart/Cart";
import GlobalStyles from "./GlobalStyles";
import {
  StyledMain,
  StyledShopping,
  StyledFilter,
  StyledListProduct,
  StyledFavorites,
  StyledNameSection,
  StyledInfoQuantity,
} from "./style";

import data from "./data/products.json";
import { Header } from "./components/Header/Header";
import { Favorites } from "./components/Favorites/Favorites";
import { OrderProducts } from "./components/OrderProducts/OrderProducts";

function App() {
  const [valueMin, setValueMin] = useState("");
  const [valueMax, setValueMax] = useState("");
  const [searchName, setSearchName] = useState("");
  const [select, setSelect] = useState("");
  const [order, setOrder] = useState("");

  const [quantityCart, setQuantityCard] = useState(0);

  const [favoriteIcon, setFavoriteIcon] = useState(false);

  const [pageChange, setPageChange] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorited")) || [];
  });

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantityCard(cart.length);
  }, [cart]);

  
  const addToCart = (data) => { //Funcao feita para adicionar ao carrinho, se a variavel findInCart retornar undefined, ele cria outra obj com os mesmos dados que ele recebe do CardProducts e adiciona o carrinho, senao, ele so altera a propriedade quantity
    const cartCopy = [...cart];
    const findInCart = cartCopy.find((elem) => {
      return elem.id === data.id;
    });

    if (!findInCart) {
      let newObj = {
        ...data,
      };
      console.log(newObj);
      cartCopy.push(newObj);
    } else {
      findInCart.quantity = findInCart.quantity + 1;
    }
    setCart(cartCopy);
  };

  const removeProduct = (data) => { //Mesma logica da acima, porem, se a quantitadade do produto for 0 ele retornar todas aquelas menos a com quantidade zero, removendo ela do array
    const cartSecondCopy = [...cart];
    const findInCart = cartSecondCopy.find((elem) => {
      return elem.id === data.id;
    });
    if (findInCart) {
      findInCart.quantity = findInCart.quantity - 1;
      setCart(cartSecondCopy);
    }
    if (findInCart.quantity === 0) {
      const deleteProduct = cartSecondCopy.filter((elem) => {
        return elem.id != data.id;
      });
      setCart(deleteProduct);
    }
  };

  const showCart = () => {
    setPageChange(!pageChange);
  };

  const totalPrice = (data) => { //Calcula o preço total das compras
    const total = data.reduce((acumulator, number) => {
      let a = number.value * number.quantity;
      return (acumulator += a);
    }, 0);
    return <span>{total}</span>;
  };

  const addToFavorites = (data) => { //Adiciona ao array favoritos, se a propriedade data.favorited for true, faz uma verificacao para ver se nao tem outro produto igual, se nao tiver ele adiciona, se tiver ele retorna todos menos ele(nao adicionando o produto selecionado)
    data.favorited = !data.favorited;
    setFavoriteIcon(!favoriteIcon);
    if (data.favorited === true) {
      const verification = favorites.find((elem) => {
        return elem.id === data.id;
      });
      if (!verification) {
        let arr = [...favorites, data];
        setFavorites(arr);
        console.log(favorites);
      }
    } else {
      const filter = favorites.filter((elem) => {
        return elem.favorited !== false;
      });
      setFavorites(filter);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorited", JSON.stringify(favorites)); //adiciona o array favorites ao Local Storage
  }, [favoriteIcon]);


  return (
    <StyledMain>
      <GlobalStyles />

      <Header
        searchName={searchName}
        setSearchName={setSearchName}
        quantityCart={quantityCart}
        pageChange={pageChange}
        setPageChange={setPageChange}
        showCart={showCart}
      />

      <StyledNameSection>Favoritos:</StyledNameSection>
      <StyledFavorites>
        {favorites.length === 0 ? (
          <h3>Não há nada no seu favorito, adicione algo!</h3>
        ) : (
          <Favorites
            data={data}
            favorites={favorites}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            favoriteIcon={favoriteIcon}
          />
        )}
      </StyledFavorites>

      <StyledInfoQuantity>
        <OrderProducts
          setSelect={setSelect}
          setOrder={setOrder}
          quantityProducts={data}
        />
      </StyledInfoQuantity>

      <StyledShopping>
        <StyledFilter>
          <Filters
            valueMin={valueMin}
            valueMax={valueMax}
            setValueMin={setValueMin}
            setValueMax={setValueMax}
          />
        </StyledFilter>

        <StyledListProduct>
          <ListProducts
            valueMin={valueMin}
            valueMax={valueMax}
            searchName={searchName}
            select={select}
            order={order}
            data={data}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            favoriteIcon={favoriteIcon}
          />
        </StyledListProduct>
      </StyledShopping>
      {pageChange && (
        <Cart
          data={cart}
          removeProduct={removeProduct}
          totalPrice={totalPrice}
          pageChange={pageChange}
          showCart={showCart}
        />
      )}
    </StyledMain>
  );
}

export default App;
