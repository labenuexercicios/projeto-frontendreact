import produtos from "../../assets/produtos.json"
import {Main, Card} from "./TelaCarrinho.styled"



function TelaCarrinho(props) {
  let precoTotal= 0
  const {carrinho, removerProduto} = props
 

  return (

    <Main>

      <Card>
        {carrinho.map((item) => {
          precoTotal+=item.price
          
          return (
            <div className="container">

          <div className="card" key={item.id}>
            <img className="imagens" src={item.imageUrl} /*alt={Produtos.imageAlt}*/ />
            <div>
              <h2>{item.name}</h2>
              <span>{produtos.rating}</span>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => removerProduto(item)}>Remover Produto</button>
              <span>{carrinho.quantity}</span>

            </div>
          </div>
          </div>
        )})}

        </Card>

        <div>Preço Total: R$ {precoTotal},00</div>
      
    </Main>

  )
}

export default TelaCarrinho;