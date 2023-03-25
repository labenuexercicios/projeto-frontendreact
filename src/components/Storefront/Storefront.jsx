import { StoreContainer } from "./styles";
import { useState, useEffect } from "react";
import Card from "../ProductCard/Card";
import Searchbar from "../SearchBar/Searchbar";

function Storefront(props) {
const [category, setCategory] = useState()

useEffect(() => {
  setCategory(props.cat)
}, [props.cat])

  const products = props.invData.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        name={item.name}
        price={props.toReal(item.price)}
        img={item.img}
        year={item.year}
        category={item.category}
        nameFilter={props.nameFilter}
        handleCart={props.handleCart}
      />
    );
  });

  return (
    <StoreContainer>
      <Searchbar
        nameFilter={props.nameFilter}
        orderFilter={props.orderFilter}
        onChangeNameFilter={props.onChangeNameFilter}
        setOrder={props.setOrder}
      />
      <div className="searchResults">
        <label>Você está vendo {category}</label>
        <p>{products.length} resultados</p>
      </div>
      <div className="store-grid">{products}</div>
    </StoreContainer>
  );
}

export default Storefront;
