
import { priceFormatter } from "../../componentes/FormatoDoPreco/PriceFormartter";
import ProdutoCard from "../../componentes/header/ProdutoCard/ProdutoCard";
import { Main } from "./TelaCarrinho.styled";


function TelaCarrinho(props) {
 const {carrinho, removerProduto} = props

 const precoItem = carrinho.reduce(
    (acomulador, produtos) => produtos.price * produtos.quantity + acomulador, 0
)
    return (
        <div>
            <Main>
                <div className="nav-produto">
                    <h1>Valor da Compra{priceFormatter.format(precoItem)}</h1>
                </div>
                <section>
 
                    {carrinho.map((produtos) => ( 
                        <ProdutoCard 
                        produtos={produtos} 
                        removerProduto= {removerProduto}
                        key={produtos.id}
                        estaNaTelaCarrinho={true}
                         />
                    ))}  
                </section>
            </Main>

        </div>
    )
}

export default TelaCarrinho