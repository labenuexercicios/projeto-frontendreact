import ProdutoCard from "../../componentes/ProdutoCard/ProdutoCard"
import { Main } from "./CarrinhoTela.styled"
import { precoFormatter } from "../../valor total/PrecoFormatter"
import money from "../../icones/gamer.png"

function CarrinhoTela (props) {

  //função está recebendo carrinho, aumentaQuantidade e diminuiQuantidade
  const { 
    carrinho,
    aumentaQuantidadeCarrinho,
    diminuiQuantidadeCarrinho,
    deletarItemCarrinho
   } = props

  //calculo do carrinho usando reduce
  const valorTotal = carrinho.reduce(
      (acumulador, produto) => produto.preco * produto.quantidade + acumulador,
      0
  )

    return (
      <Main>
      <section>
      <h1>Meu Carrinho 🛒</h1>

      <div className="oferta">
      <p> Jogos de Qualidade: Ofertas Imperdíveis em Nossa Arena de Games <span>KING-GAMES</span>.</p>
      </div>
            

      {carrinho.map((produto) => (
      <ProdutoCard
      produto={produto}
      key={produto.id}
      estaNaTelaCarrinho={true} //estaNaTelaProdutos é verdadeiro quando ESTIVER na tela de Carrinho
      aumentaQuantidadeCarrinho={aumentaQuantidadeCarrinho}
      diminuiQuantidadeCarrinho={diminuiQuantidadeCarrinho}
      deletarItemCarrinho={deletarItemCarrinho}
      />
))}

      <div className="gameboy">
   <img src={money} width="250px" alt="gameboy" />
   </div>

   <div className="valor-total">
      <b>Valor total:  {precoFormatter.format(valorTotal)}</b>
      </div>
      </section>


    </Main>
 )
}

export default CarrinhoTela







      