import { BsFillCartFill } from "react-icons/bs";



function Header({ sacola, receberOrdem, filtrar }) {
    const {
        carrinho
    } = sacola



    return (
        <div>
            <div>
                <h1>Laboratório Louco</h1>
            </div>
            <label htmlFor="valorMin">Valor Mínimo:</label>
            <input
                type="number"
                id="valorMin"
                value={filtrar.valorMin}
                placeholder="R$: 0.99"
                onChange={(e) => { filtrar.receberValorMin(e) }}
            />
            <label htmlFor="valorMax">Valor Máximo:</label>
            <input
                type="number"
                id="valorMax"
                value={filtrar.valorMax}
                placeholder="R$: 99.99"
                onChange={(e) => { filtrar.receberValorMax(e) }}
            />
            <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                id="nome"
                value={filtrar.nome}
                placeholder="Buscar por nome"
                onChange={(e) => { filtrar.receberNome(e) }}
            />
            <button onClick={()=>{filtrar.limparFiltro()}}>Limpar Filtro</button>
            
            {receberOrdem()}
            <span>{carrinho.length} <BsFillCartFill /></span>


        </div>
    )
}
export default Header