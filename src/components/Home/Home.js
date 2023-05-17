import CartProdutos from "../CartProdutos/CartProdutos"
import './Style.css';

function Home(props) {

    const { results } = props

    const renderList = results.map(produto => {
        return (
            <CartProdutos
                img={produto.image}
                nome={produto.title}
                preco={produto.price}
            />
        )
    })
    return (
        <div>
            <div className="ordenacao">
                <p>Quantidade de produto</p>
                <label>
                    Ordenação
                    <select>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </label>
            </div>

            <div className="produtos">
                {renderList}
            </div>

        </div >
    )
}

export default Home