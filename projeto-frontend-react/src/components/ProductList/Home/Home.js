import { useState } from "react";
import { HomeCabecalho, HomeContainer, HomeProdutos } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home(props) {
  const { cart, minFilter, maxFilter } = props.states
  const { setCart, setAmount } = props.handlers
  const { productsList } = props;
  const { filteredProducts } = props
  const { addCart } = props;
  const { deleteProductCart } = props;

  const [ordination, setOrdination] = useState("asc");

  const changeOrder = (event) => {
    setOrdination(event.target.value);
  };

  const renderList = filteredProducts
  .sort((a,b)=>ordination === "" || ordination === "asc" && a.name > b.name ? 1 : -1)
  .sort((a,b)=>ordination === "" || ordination === "desc" && a.name > b.name ? -1 : 1)
  .map((item) => {
    return (
      <ProductCard
      key={item.id}
      id={item.id}
      name={item.name}
      value={item.value}
      imageUrl={item.imageUrl}
      cart={cart}
      handlers={{ setCart, setAmount }}
      products={item}
      addCart={addCart}
      deleteProductCart={deleteProductCart}
      />
    );
  })

  // const produtos = productsList.map((item) => {
  //   return (
  //     <ProductCard
  //       key={item.id}
  //       id={item.id}
  //       name={item.name}
  //       value={item.value}
  //       imageUrl={item.imageUrl}
  //       cart={cart}
  //       handlers={{ setCart, setAmount }}
  //       product={item}
  //       addCart={addCart}
  //       deleteProductCart={deleteProductCart}
  //     />
  //   );
  // });

  return (
    <>
      <HomeContainer>
        <h2>Home</h2>
        <HomeCabecalho>
          <h5>Quantidade de produtos: </h5>
          <p>{productsList.length} produto(s)</p>
          <h5>Ordenação:</h5>
          <select
            value={ordination}
            onChange={changeOrder}
          >
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </HomeCabecalho>
        <HomeProdutos>{renderList}</HomeProdutos>
      </HomeContainer>
    </>
  );
}
