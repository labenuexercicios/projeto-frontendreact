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

  const produto = listaDeProdutos
    .filter((item) => item.nomeDoProduto.toLowerCase().includes(props.searchFilter.toLowerCase()))
    .filter((item)=> {
      if(props.minFilter > 0 && props.maxFilter > 0){
        return (item.preco >= props.minFilter && item.preco <= props.maxFilter)
      }else{
        return item
      }
    })
    .sort((a,b)=>{
      if (ordination === "asc" && a.nomeDoProduto.toLowerCase() < b.nomeDoProduto.toLowerCase()){
        return 1 
      }else if (ordination === "desc" && b.nomeDoProduto.toLowerCase() < a.nomeDoProduto.toLowerCase()){
        return -1        
      }else{
        return 1
      }
    })
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

  return (
    <>
      <HomeContainer>
        <h1>Escolha seu brinquedo</h1>
        <HomeOrdenacao>
          
          <label>Quantidade de produtos: {listaDeProdutos.length}</label>
          <label>
            Ordenação: 
            
            <select
              value={ordination}
              onChange={changeOrder}
            >
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </label>
          
        </HomeOrdenacao>
        

        <HomeCard>
          {produto}
        </HomeCard>
      </HomeContainer>
    </>
  );
}

export default Home;