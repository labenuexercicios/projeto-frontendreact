import { useEffect, useState } from "react";
import ProductCard from "../ProdutosCard/CardProduto"
import { HomeDiv, QuantySelect } from "./ProdutosStyle";

const Home = (props) => {
  const [ordination, setOrdination] = useState("Crescente");
  const handleInputOrdination = (e) => {
    setOrdination(e.target.value);
  };

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartStorage) {
      props.setCart(cartStorage);
    }
  }, []);

  const SaveCartToLocalStorage = (cartNew) => {
    const cartJson = JSON.stringify(cartNew);
    localStorage.setItem("cart", cartJson);
  };

  const addItemsCart = (product) => {
    console.log("add", product);
    const sameProduct = props.cart.filter((item) => {
      if (product.id === item.id) {
        return item;
      } else {
        return false;
      }
    });

    if (sameProduct.length === 0) {
      product.quantity = 1;
      props.setCart([product, ...props.cart]);
    } else {
      const cartNew = props.cart.map((item) => {
        if (product.id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
   

      props.setCart(cartNew);
      SaveCartToLocalStorage(cartNew);
    }
    console.log(typeof props.amount);

    props.setAmount(props.amount + product.value);
  };
  const orderedProducts = props.productList.sort((a, b) => {
    if (ordination === "Crescente") {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  });

  const productMapped = orderedProducts.map((product) => {
    return (
      <ProductCard
       imagem={product.imagem}
        value={product.value}
        name={product.name}
        id={product.id}
        onClick={() => addItemsCart(product)}
      />
    );
  });

  return (
    <div>
      <QuantySelect>
        <p>Quantidade de produtos: {props.productList.length}</p>
        <label>
          Ordenação:
          <select onChange={handleInputOrdination} value={ordination}>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </label>
      </QuantySelect>
      <HomeDiv>{productMapped}</HomeDiv>
    </div>
  );
};

export default Home;
