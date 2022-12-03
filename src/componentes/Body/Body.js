import React, {useState} from "react";
import Box from "./Box";
import produtos from "../../produto/produtos.json"
import Filtros from "./Filter";
// import Card from "../CardProduto/CardProduto";

export default function Body() {

    const [buscaNome, setBuscaNome] = useState("")
    const [valorMin, setValorMin] = useState(0)
    const [valorMax, setValorMax] = useState(Number.POSITIVE_INFINITY)
    const [ordenaValor, setOrdenaValor] = useState("")

    
    return(
        <>
            <h2>Aqui é o Body, onde deverá conter os Filtros, o Container dos Cards dos produtos e o Carrinho</h2>
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
            />
            
        </>
    )
}   