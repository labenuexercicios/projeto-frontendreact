import React, {useState} from "react";
import Box from "./Box";
import produtos from "../../produto/produtos.json"
// import Card from "../CardProduto/CardProduto";

export default function Body() {

    const [buscaNome, setBuscaNome] = useState("")

    
    
    console.log(produtos)
    
    return(
        <>
            <h2>Aqui é o Body, onde deverá conter os Filtros, o Container dos Cards dos produtos e o Carrinho</h2>
            <Box
            buscaNome={buscaNome}
            setBuscaNome={setBuscaNome}
            />
            
        </>
    )
}   