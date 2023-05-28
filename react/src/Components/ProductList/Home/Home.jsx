import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { DivPai, DivProduct, HomeStyle } from "./HomeStyle";

export function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart,
  orderList,
  setOrderList,
}) {
  const [ordination, setOrdination] = useState("");

  const addCart = (product) => {
    const newProduct = cart.find(
      (productCallBack) => product.id === productCallBack.id
    );

    if (!newProduct) {
      product = { ...product, quantify: 1 };
      setCart([...cart, product]);

      const totalPrice = amount + product.value;
      setAmount(totalPrice);
    } else {
      const newCart = cart.map((produto) => {
        if (produto.id === newProduct.id) {
          const totalPrice = amount + product.value;
          setAmount(totalPrice);
          return { ...newProduct, quantify: produto.quantify + 1 };
        } else {
          return produto;
        }
      });
      setCart(newCart);
    }
  };

  useEffect(() => {
    orderList.sort((a, b) => {
      if (ordination === "Decrescente") {
        return b.value - a.value;
      } else if (ordination === "Crescente") {
        return a.value - b.value;
      }
      return 0;
    });
    setOrderList([...orderList]);
  }, [ordination]);

  return (
    <HomeStyle>
      <DivPai>
        <label>Quantidade de Produtos: {productList.length}</label>
        <label>
          Ordenação:
          <select
            value={ordination}
            onChange={(e) => setOrdination(e.target.value)}
          >
            <option>Selecione</option>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>
        </label>
      </DivPai>

      <DivProduct>
        {orderList.map((product) => {
          return (
            <ProductCard
              productList={product}
              key={product.id}
              addCart={addCart}
            />
          );
        })}
      </DivProduct>
    </HomeStyle>
  );
}
