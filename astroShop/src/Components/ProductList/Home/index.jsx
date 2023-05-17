/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Container, Header, ProductGrid } from "./styles";

const Home = ({ productList, minFilter, maxFilter, searchFilter }) => {
  const [sortedProductList, setSortedProductList] = useState([...productList]);
  const [sortValue, setSortValue] = useState('');

  const handleSort = (e) => {
    setSortValue(e.target.value)
  };

  useEffect(() => {
    let filteredProducts = productList.filter(
      product => 
      (minFilter ? product.value >= minFilter : true) &&
      (maxFilter ? product.value <= maxFilter : true)
    );

    if(searchFilter) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchFilter.toLowerCase())  
      );
    }

    const sortedProducts = [...filteredProducts].sort((min, max) => {
      if (sortValue === "ascending") {
        return min.value - max.value;
      } else if (sortValue === "descending") {
        return max.value - min.value;
      } else {
        return 0;
      }
    });

    setSortedProductList(sortedProducts);
  }, [productList, minFilter, maxFilter, searchFilter, sortValue]);

  return (
    <>
      <Container>
        <Header>
          <p>Quantidade de Produtos: {sortedProductList.length}</p>
          <select name="ascending" id="ascending" onChange={handleSort}>
            <option value="">Ordenar por:</option>
            <option value="ascending">crescente</option>
            <option value="descending">decrescente</option>
          </select>
        </Header>
        <ProductGrid>
          {sortedProductList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductGrid>
      </Container>
    </>
  );
};

export default Home;
