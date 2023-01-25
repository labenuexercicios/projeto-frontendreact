import { priceFormatter } from "../../FormatoDoPreco/PriceFormartter"
import { CaixaProduto } from "./ProdutoCard.styled"
import iconCar from "../../../assets/icon-carrinho.png"
 



function ProdutoCard(props) {
    const {
        adicionaCarrinho,
        removerProduto,
        produtos,
        carrinho,
        estaNaTelaProduto,
        estaNaTelaCarrinho

    } = props

   


    return (
        <CaixaProduto>

            <div>
                <div className="card-name">
                    <img src={produtos.imageUrl} alt={produtos.imageAlt} />
                    <h4>{produtos.name}</h4>
                    <h6>{produtos.rating}</h6>
                </div>
                <div className="card-preco">
                    <span>{priceFormatter.format(produtos.price)}</span>
                    {estaNaTelaProduto &&
                        <button onClick={() => adicionaCarrinho(produtos)}>
                            <img src={iconCar}/>
                        </button>
                    }

                    {estaNaTelaCarrinho &&
                        <button onClick={() => removerProduto(produtos)}>remover item</button>
                    }

                    {estaNaTelaCarrinho &&

                        <span>x{produtos.quantity}</span>
                    }

                   

                </div>
            </div>
        </CaixaProduto>
    )

}

export default ProdutoCard