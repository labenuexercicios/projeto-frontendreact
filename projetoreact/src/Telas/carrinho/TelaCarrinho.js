import produtos from "../../assets/produtos.json"
import {Main, Card, PrecoTotal} from "./TelaCarrinho.styled"



function TelaCarrinho(props) {
  const {carrinho, removerProduto} = props
  
  let precoTotal= carrinho.reduce((acc, product) => (product.price * product.quantidade) + acc, 0)
  console.log(precoTotal)

  return (
<>
    <Main>

      <Card>
        {carrinho.map((item) => {
         
          
          return (
            <div className="container">

          <div className="card" key={item.id}>
            <img className="imagens" src={item.imageUrl} /*alt={Produtos.imageAlt}*/ />
            <div className="nomeBrinquedo">
              <h2>{item.name}</h2>
              {/* <span>{produtos.rating}</span> */}
            </div>
            <div className="informacoes">
              <span>R$ {item.price},00</span>
              <button className="remover" onClick={() => removerProduto(item)}>Remover</button>
              <span>x{item.quantidade}</span>
             

            </div>
          </div>
          </div>
        )})}


        </Card>

        
      
    </Main>

    
    
    <PrecoTotal>
      
      <div className="preco">Preço Total: R$ {precoTotal},00</div>
    
    
    </PrecoTotal>
    

    </>

  )
}

export default TelaCarrinho;