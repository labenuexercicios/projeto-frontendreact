import React from "react";
import { HomeDisplay, Produto, Botao } from "./styled";
import products from "../../ItemsList/list";

export default function Home({
  searchByName,
  priceOrder,
  sortOrder,
  maxPriceSearch,
  minPriceSearch,
  cart,
  setCart,
}) {
  // --- Functions

  // Search by Name
  const handleFilterByName = (product) => {
    const filteredProduct = searchByName.toLowerCase();
    const selectedProduct = product.name.toLowerCase();
    if (selectedProduct.includes(filteredProduct) && searchByName !== "") {
      return filteredProduct;
    } else if (searchByName === "") {
      return products;
    }
  };

  // Order by Price
  const handleOrderByValue = (state, nextState) => {
    if (priceOrder === "crescent") {
      if (state.price < nextState.price) {
        return -1;
      } else if (state.price > nextState.price) {
        return 1;
      } else {
        return 0;
      }
    }
    if (priceOrder === "decrescent") {
      if (state.price > nextState.price) {
        return -1;
      } else if (state.price < nextState.price) {
        return 1;
      } else {
        return 0;
      }
    }
  };

  // Search by Max Value
  const handleFilterByMaxValue = (product) => {
    const filteredProduct = maxPriceSearch;
    const selectedProduct = product.price;
    if (filteredProduct >= selectedProduct && maxPriceSearch !== "") {
      return filteredProduct;
    } else if (maxPriceSearch === "") {
      return products;
    }
  };

  // Search by Min Value
  const handleFilterByMinValue = (product) => {
    const filteredProduct = minPriceSearch;
    const selectedProduct = product.price;
    if (filteredProduct <= selectedProduct && minPriceSearch !== "") {
      return filteredProduct;
    } else if (minPriceSearch === "") {
      return products;
    }
  };

  // Order by Sort
  const handleOrderBySort = (state, nextState) => {
    if (sortOrder === "alphabetic") {
      if (state.name < nextState.name) {
        return -1;
      } else if (state.name > nextState.name) {
        return 1;
      } else {
        return 0;
      }
    }
    if (sortOrder === "rating") {
      if (state.rating > nextState.rating) {
        return -1;
      } else if (state.rating < nextState.rating) {
        return 1;
      } else {
        return 0;
      }
    }
  };

  // Add to cart
  const handleAddToCart = (product, id) => {
    const newProduct = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };



  return (
    <HomeDisplay>
      <h1>Let's Travel Together!</h1>
      <div>
        {products
          .filter(handleFilterByName)
          .filter(handleFilterByMaxValue)
          .filter(handleFilterByMinValue)
          .sort(handleOrderByValue)
          .sort(handleOrderBySort)
          .map((product) => (
            <Produto key={product.id}>
              <h2>{product.name}</h2>
              <p>
                {product.rating}{" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"
                  alt="Star Rating"
                  width={"16px"}
                />
              </p>
              <img src={product.image} alt={product.name} />
              <p>
                {product.price.toLocaleString("en", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p>
                <b>Distance: </b>
                {product.distance} million/km
              </p>
              <p>
                <b>Weather: </b>
                {product.weather}
              </p>
              <p>{product.description}</p>
              <Botao onClick={() => handleAddToCart(product, product.id)}>
                Buy
              </Botao>
            </Produto>
          ))}
      </div>
    </HomeDisplay>
  );
}
