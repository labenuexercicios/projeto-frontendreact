import { useState } from "react";
import Header from "../../Components/Header/Header";
import Filtro from "../../Components/Filtro/Filtro";
import Sort from "../../Components/SortBy/SortBy";
import { ContainerCard, AppContainer, MainContainer, ProductContainer } from "./style";
import brinquedos from "../../assets/products.json";
import Cards from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";

function MainPage(props) {
  const [minPrice, setMinPrice] = useState(-Infinity);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("crescente");

  const { goToCartScreen, itemsInCart } = props;

  const { addToCart } = props;

  return (
    <AppContainer>
      <Header search={search} setSearch={setSearch} goToCartScreen={goToCartScreen} itemsInCart={itemsInCart} />
      <MainContainer>
        <Filtro
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <ProductContainer>
          <Sort order={order} setOrder={setOrder} />
          <ContainerCard>
            {brinquedos
              .filter((item) => {
                return item.name
                  .toLocaleUpperCase()
                  .includes(search.toLocaleUpperCase());
              })
              .filter((item) => {
                return item.price >= minPrice || minPrice === "";
              })
              .filter((item) => {
                return item.price <= maxPrice || maxPrice === "";
              })
              .sort((a, b) => {
                return a.price - b.price;
              })
              .sort(() => {
                if (order === "crescente") {
                  return 0;
                } else {
                  return -1;
                }
              })
              .map((product) => {
                return <Cards key={product.id} product={product} addToCart={addToCart}></Cards>;
              })}
          </ContainerCard>
        </ProductContainer>
      </MainContainer>
      <Footer/>
    </AppContainer>
  );
}

export default MainPage;