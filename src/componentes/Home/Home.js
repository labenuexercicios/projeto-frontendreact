import { Produtos } from "../Produtos/Produtos";
import { HomeContainer, HomeOrdenacao, HomeCard } from "./styleHome";
import { ProdutosCard } from "../Produtos/styleProdutos";
import { useState } from "react";

function Home(props) {
  const { listaDeProdutos, cart, setCart} = props;
  const [ordination, setOrdination] = useState("asc");

  const changeOrder = (event) => {
    setOrdination(event.target.value);
  };


  const renderList = listaDeProdutos
  .sort((a,b)=>ordination === "" || ordination === "asc" && a.nome > b.nome ? 1 : -1)
  .sort((a,b)=>ordination === "" || ordination === "desc" && a.nome > b.nome ? -1 : 1)
  .map((item) => {
    return (
      <ProdutosCard
        key={item.id}
        id={item.id}
        cart={cart}
        nomeDoProduto={item.nomeDoProduto}
        preco={item.preco}
        imagem={item.imagem}
      />
    );
  })

  const produto = listaDeProdutos
    .filter((item) =>
      item.nomeDoProduto
        .toLowerCase()
        .includes(props.searchFilter.toLowerCase())
    )
    .map((produtos) => (
      <Produtos
        key={produtos.id}
        id={produtos.id}
        produtos={produtos}
        cart={cart}
        setCart={setCart}
        nomeDoProduto={produtos.nomeDoProduto}
        preco={produtos.preco}
        imagem={produtos.imagem}
      />
    ));

  const filtroMinimo = listaDeProdutos
    .filter((item) => item.preco < props.minFilter)
    .map((item) => (
      <Produtos
        key={item.id}
        nomeDoProduto={item.nomeDoProduto}
        preco={item.preco}
        imagem={item.imagem}
      />
    ));

  const filtroMaximo = listaDeProdutos
    .filter((item) => {
      if (item.preco > props.maxFilter) {
        return      
      }
      else {
        return ""
      }
    })
    .map((item) => (
      <Produtos
        key={item.id}
        nomeDoProduto={item.nomeDoProduto}
        preco={item.preco}
        imagem={item.imagem}
      />
    ));



  return (
    <>
      <HomeContainer>
        <h1>Home</h1>
        <HomeOrdenacao>
          
          <label>Quantidade de produtos: {listaDeProdutos.length}</label>
          <label>
            Ordenação: 
            
            <select
              value={ordination}
              onChange={changeOrder}
            //   onChange={(event) => {
            //     setOrdination(event.target.value);
            //   }
            // }
            >
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </label>
          
        </HomeOrdenacao>
        

        <HomeCard>
          {filtroMinimo.length > 0 ? filtroMinimo : produto}
          {filtroMaximo && filtroMaximo}
        </HomeCard>
      </HomeContainer>
    </>
  );
}

export default Home;