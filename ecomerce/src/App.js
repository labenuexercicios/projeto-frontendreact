import { Home } from "./Componentes/ListaProdutos/Home/Home"
import { Filtros } from "./Componentes/Filtros/Filtros"
import { Carrinho } from "./Componentes/CarrinhoCompras/Carrinho/Carrinho"

export default function App() {

  return(
    <div>
      <Filtros />
      <Home />
      <Carrinho />
    </div>
  )
}
