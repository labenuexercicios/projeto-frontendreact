/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Container, Header, ProductGrid } from "./styles";

const Home = ({ productList }) => {
  const [sortedProductList, setSortedProductList] = useState([...productList])

  const handleSort = (e) => {
    const sortValue = e.target.value;
    const sortedProducts = [...productList].sort((a, b) => {
    if(sortValue === 'crescente') {
      return a.value - b.value;
    } else if(sortValue === 'decrescente') {
      return b.value -a.value;
    } else {
      return 0;
    }
  });
  setSortedProductList(sortedProducts);
  }
  useEffect(() => {
    setSortedProductList([...productList])
  }, [productList])

  return (
    <>
      <Container>
        <Header>
          <p>Quantidade de Produtos: {sortedProductList.length}</p>
          <select name="crescente" id="crescente" onChange={handleSort}>
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
