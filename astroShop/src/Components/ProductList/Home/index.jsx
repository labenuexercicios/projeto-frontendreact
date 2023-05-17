/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Container, Header, ProductGrid } from "./styles";

const Home = ({ productList, minFilter, maxFilter, searchFilter }) => {
  const [sortedProductList, setSortedProductList] = useState([...productList]);

  const handleSort = (e) => {
    const sortValue = e.target.value;
    const sortedProducts = [...productList].sort((min, max) => {
      if (sortValue === "crescente") {
        return min.value - max.value;
      } else if (sortValue === "decrescente") {
        return max.value - min.value;
      } else {
        return 0;
      }
    });
    setSortedProductList(sortedProducts);
  };
  useEffect(() => {
    const filteredProducts = productList.filter(
      product => 
      (minFilter ? product.value >= minFilter : true) &&
      (maxFilter ? product.value <= maxFilter : true)
    );

    if(searchFilter) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchFilter.toLowerCase())  
      )
    }
    setSortedProductList(filteredProducts);
  }, [productList, minFilter, maxFilter, searchFilter]);

  return (
    <>
      <Container>
        <Header>
          <p>Quantidade de Produtos: {sortedProductList.length}</p>
          <select name="crescente" id="crescente" onChange={handleSort}>
            <option value="">Ordenar por:</option>
            <option value="crescente">crescente</option>
            <option value="decrescente">decrescente</option>
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
