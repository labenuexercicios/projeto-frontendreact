import { Main } from "./style";
import Filter from "./Filter";
import ProductsList from "./Products";
import Cart from "./Cart";
import Card from "./Products/Card";
import { ProductWrapper } from "./Products/style";
import { useEffect, useState } from "react";
import { ProductList } from "../ProductData";

export default function Home() {
  //variable state
  const [toOrder, setToOrder] = useState("");

  //variable state
  const [toRender, setToRender] = useState(ProductList);

  //-- Product main basis filter
  //? conditional to filter ordering lists
  toOrder === "list A-Z"
    ? toRender.sort((a, b) => a.name.localeCompare(b.name))
    : toOrder === "list Z-A"
    ? toRender.sort((a, b) => b.name.localeCompare(a.name))
    : toOrder === "ascending"
    ? toRender.sort((a, b) => a.price - b.price)
    : toOrder === "descending"
    ? toRender.sort((a, b) => b.price - a.price)
    : toOrder === "list" && toRender.sort((idA, idB) => idA.id - idB.id);

  //-- Set advanced filters criteries
  //variable state
  const [filter, setFilter] = useState({
    filterByMinValue: "",
    filterByMaxValue: "",
    filterByName: "",
  });

  //-- Non advanced filtered setter

  useEffect(() => {
    !filter.filterByMinValue &&
      !filter.filterByMaxValue &&
      !filter.filterByName &&
      setToRender(ProductList);
  }, [filter]);

  //-- Advanced Filter by Value
  // variable array method
  const filterValue = ProductList.filter((product) =>
    !filter.filterByMinValue & filter.filterByMaxValue ||
    !filter.filterByMaxValue
      ? product.price >= filter.filterByMinValue ||
        product.price <= filter.filterByMaxValue
      : product.price >= filter.filterByMinValue &&
        product.price <= filter.filterByMaxValue
  );

  //? Function to apply filter by Value
  //* function  *//
  const applyFilter = () => {
    setToRender(filterValue);
  };

  const handleDeleteList = () => {
    setCartList([]);
    localStorage.removeItem("cartList");
  };

  const applyFilterName = (filterByName) => {
    toRender.filter((product) =>
      product.name.toLowerCase().includes(filterByName.toLowerCase())
    );
  };

  //-- Render filtered or non filtered list according to toRender
  //variable state
  const [cartList, setCartList] = useState([]);

  //-- Handle with doubled item assuring it will be updated
  //vatiable array method
  const renderList = toRender
    .filter((product) =>
      product.name.toLowerCase().includes(filter.filterByName.toLowerCase())
    )
    .map((product, index) => {
      return (
        <ProductWrapper key={index}>
          <Card
            //? printed card values start
            key={index}
            productKey={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            //? printed card values end
            cartList={cartList}
            setCartList={setCartList}
          />
        </ProductWrapper>
      );
    });
  //********************/
  //** Component Home **/
  //********************/
  return (
    <>
      <Main>
        <Cart
          cartList={cartList}
          handleDeleteList={handleDeleteList}
          setCartList={setCartList}
        />

        <Filter
          filter={filter}
          setFilter={setFilter}
          applyFilter={applyFilter}
          applyFilterName={applyFilterName}
        />

        <ProductsList renderList={renderList} setToOrder={setToOrder} />
      </Main>
    </>
  );
}
