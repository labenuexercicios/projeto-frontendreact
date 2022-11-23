import Produtos from "../../assets/produtos.json"
import { Main } from "./TelaProduto.styled";

function TelaProduto() {
  console.log(Produtos)

  return (
    <Main >

      <h1>Produtos</h1>

      {

        Produtos.map((Produtos) => (
          <div key={Produtos.id}>
            <img src={Produtos.imageUrl} /*alt={Produtos.imageAlt}*//>

            <div>
              <h2>{Produtos.name}</h2>
              <span>{Produtos.rating}</span>

            </div>

            <div>
              <span>{Produtos.price}</span>
              <button>Adicionar Carrinho</button>

            </div>
          </div>
        ))}

    </Main>
  )
}

export default TelaProduto;