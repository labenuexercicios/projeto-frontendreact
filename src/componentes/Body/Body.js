import React, {useState} from "react";
import Box from "./Box";
import produtos from "../../produto/produtos.json"
import Filtros from "./Filter";
import Carrinho from "./Carrinho";
// import Card from "../CardProduto/CardProduto";

export default function Body() {

    const [buscaNome, setBuscaNome] = useState("")
    const [valorMin, setValorMin] = useState(Number.NEGATIVE_INFINITY)
    const [valorMax, setValorMax] = useState(Number.POSITIVE_INFINITY)
    const [ordenaValor, setOrdenaValor] = useState("")
    const [listaProdutos, setListaProdutos] = useState([])

    
    return(
        <>
            <Filtros
            valorMin={valorMin}
            setValorMin={setValorMin}
            valorMax={valorMax}
            setValorMax={setValorMax}
            ordenaValor={ordenaValor}
            setOrdenaValor={setOrdenaValor}
            />
            <Box
            buscaNome={buscaNome}
            setBuscaNome={setBuscaNome}
            valorMin={valorMin}
            valorMax={valorMax}
            ordenaValor={ordenaValor}
            listaProdutos={listaProdutos} 
            setListaProdutos={setListaProdutos}
            />
            <Carrinho listaProdutos={listaProdutos} setListaProdutos={setListaProdutos}/>
            
        </>
    )
}   