import React, {useState} from "react";
import Box from "./Box";
import produtos from "../../produto/produtos.json"
import Filtros from "./Filter";
import Carrinho from "./Cart";
import { StyleBody } from "../../styles";
// import Card from "../CardProduto/CardProduto";

export default function Body() {

    const [buscaNome, setBuscaNome] = useState("")
    const [valorMin, setValorMin] = useState(Number.NEGATIVE_INFINITY)
    const [valorMax, setValorMax] = useState(Number.POSITIVE_INFINITY)
    const [ordenaValor, setOrdenaValor] = useState("")
    const [listaProdutos, setListaProdutos] = useState([])

    console.log(`Aqui é a lista de produtos ${listaProdutos.length}`)
    
    return(
        <StyleBody>
            {/* <section> */}
                <span>
                <Filtros
                valorMin={valorMin}
                setValorMin={setValorMin}
                valorMax={valorMax}
                setValorMax={setValorMax}
                ordenaValor={ordenaValor}
                setOrdenaValor={setOrdenaValor}
                />
                </span>
                <span>
                <Box
                buscaNome={buscaNome}
                setBuscaNome={setBuscaNome}
                valorMin={valorMin}
                valorMax={valorMax}
                ordenaValor={ordenaValor}
                listaProdutos={listaProdutos} 
                setListaProdutos={setListaProdutos}
                />
                </span>
                <span>
                <Carrinho 
                listaProdutos={listaProdutos}
                setListaProdutos={setListaProdutos}
                />
                </span>
            {/* </section> */}
        </StyleBody>
    )
}   