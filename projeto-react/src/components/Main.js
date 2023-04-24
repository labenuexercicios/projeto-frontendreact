import React, { useEffect, useState } from 'react';
import Produto from './Produto';

export default function Main(props) {
    const {onAdd, itens, setItens} = props;
    const [nome, setNome] = useState("");
    const [tipoFiltro, setTipoFiltro] = useState("");
    const [metodoFiltro, setMetodoFiltro] = useState("");
    function pesquisaNome() {
        const lista = itens.filter((item) => item.name === nome)
        setItens(lista)
    }
    function ordemAlfabetica() {
        const listaAlfabetica = itens.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        setItens(listaAlfabetica)
    }
    function ordemNaoAlfabetica() {
        const listaNaoAlfabetica = itens.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        })
        setItens(listaNaoAlfabetica)
    }
    function ordemCrescente() {
        const listaCrescente = itens.sort((a, b) => a.valor - b.valor);
        setItens(listaCrescente)
    }
    function ordemDecrescente() {
        const listaDecrescente = itens.sort((a, b) => a.valor - b.valor).reverse();
        setItens(listaDecrescente)
    }

    const grupoCrescente = {
        alfabetica: {
            funcao: ordemAlfabetica},
        preco: {
            funcao: ordemCrescente}
    }

    const grupoDecrescente = {
        alfabetica: {
            funcao: ordemNaoAlfabetica},
        preco: {
            funcao: ordemDecrescente}
    }

    useEffect(() => {
        switch (metodoFiltro) {
            case "crescente":
            grupoCrescente[tipoFiltro].funcao()
                break;
            case "decrescente":
            grupoDecrescente[tipoFiltro].funcao()
            default:
                break;
        }
    }, [tipoFiltro, metodoFiltro])

    return(
    <main className='block col-2'>
        <h2>Produtos</h2>
        <div className="filter">
            <div>
                <input type="text" placeholder="Pesquisa" onChange={(e) => setNome(e.target.value)} value={nome}/>
                <button type="button" onClick={() => pesquisaNome()}>Pesquisar</button>
            </div>
            <div className="filter-result">{itens.length} Produtos</div>
            <div className="filter-sort">
                Ordenar por:
                <select onChange={(e) => setTipoFiltro(e.target.value)} value={tipoFiltro}>
                    <option value="alfabetica">Ordem por título</option>
                    <option value="preco">Ordem por preço</option>
                </select>
                </div>
            <div className="filter-size">
                Filtrar:
                <select onChange={(e) => setMetodoFiltro(e.target.value)} value={metodoFiltro}>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
                </div>
        </div>
        <div className='row'>

            {props.produtos.map((produto) => (
                <Produto key={produto.name} produto={produto} onAdd={onAdd}></Produto>
            ))}
        </div>
    </main>
    )
}