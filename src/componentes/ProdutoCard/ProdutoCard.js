import { ProdutoCardContainer } from "./ProdutoCard.styled";
import { precoFormatter } from "../../valor total/PrecoFormatter";

function ProdutoCard(props) {
  

    const {
           produto,
           adicionarCarrinho,
           estaNaTelaProdutos,
           estaNaTelaCarrinho,
           aumentaQuantidadeCarrinho,
           diminuiQuantidadeCarrinho,
           deletarItemCarrinho
          } = props

  

  return (
    <ProdutoCardContainer>

       <div className="url">
      <img src={produto.url} width="150px" alt="Mario" />
      </div> 


      <div>
        <div className="card-header">
          <h1>{produto.nome}</h1>
          </div>

          <div className="card-preco">
          <span>{precoFormatter.format(produto.preco)}</span>
        </div>

      
   

      {
      estaNaTelaCarrinho && produto.quantidade > 1
      && <button 
      onClick={() => diminuiQuantidadeCarrinho(produto)}
      >
      -
      </button>
      }


    
      {    
        estaNaTelaCarrinho  
        && <button 
        onClick={() => aumentaQuantidadeCarrinho(produto)}
        >
        +
        </button>
      }

        <div className="card-carrinho">
         
          {estaNaTelaProdutos && <button onClick={() => adicionarCarrinho(produto)}>Adicionar ao Carrinho</button>}


         
          {estaNaTelaCarrinho && <span>x{produto.quantidade}</span>
          }
          </div>
          </div>

          
         

          {
            estaNaTelaCarrinho && <button onClick={() => deletarItemCarrinho(produto)}>❌</button>
          }


    </ProdutoCardContainer>
  );
}

export default ProdutoCard;
