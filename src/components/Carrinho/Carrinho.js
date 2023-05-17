// import Itens from "../Itens/Itens";
import './Style.css';


function Carrinho() {
    return (
        <div className="carrinho">
            <p>Carrinho</p>
            <div className='produtos-carrinho'>
                <div className='itens'>
                    <p>1x</p>
                    <p>Produto 4</p>
                    <button>Remover</button>
                </div>
                <div className='itens'>
                    <p>1x</p>
                    <p>Produto 4</p>
                    <button>Remover</button>
                </div>
            </div>
            <p>Valor total: R$</p>
        </div>
    )
}

export default Carrinho