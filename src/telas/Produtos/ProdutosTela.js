import ProdutoCard from "../../componentes/ProdutoCard/ProdutoCard";
import produtos from "../../produtos/Produtos.json";
import { Main } from "./ProdutosTela.styled";

function ProdutosTela(props) {

 
  const { 
    adicionarCarrinho,
    filtraTexto,
     } = props

  

  //pega a lista de produtos e  o produto
  const filterProdutosByText = () => {
    return produtos.filter(
      (produto) => produto.nome.toLocaleLowerCase().includes(filtraTexto.toLocaleLowerCase()));
  };

  return (
   

    <Main>
      <section>

        <div className="welcome">
            <h1> Bem-vindo ao <span>KING-GAMES</span>
            </h1>
        </div>

            <div className="welcome-logo">
            <p>Explosão de Emoções: Descubra os Melhores Jogos </p>
            </div>
    
      <h1>Games</h1>

      {
        
        filterProdutosByText()
        .map((produto) => (

     
      <ProdutoCard   
      produto={produto} 
      adicionarCarrinho={adicionarCarrinho}
      key={produto.id}
      
      estaNaTelaProdutos={true}
     
      />


))
}
      </section>

      
    </Main>
  );
}

export default ProdutosTela;
