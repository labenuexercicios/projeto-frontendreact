import React, { useEffect, useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { TelaInicial } from "../pages/TelaInicial"
import { Home } from "../pages/Home"
import {Carrinho} from "../pages/Carrinho"
import produtos from "../produtos.json"







export function Router (){

    const [valorDoFiltro, setValorDoFiltro] = useState("")
    const [valorMin, setValorMin] = useState(Infinity)
    const [valorMax, setValorMax] = useState(Infinity)
    const [sortProdutos, setSortProdutos] = useState("nome")
    const [ordem, setOrdem] = useState("cres")
    const [carrinho, setCarrinho]= useState([])


    



    function addCart (prods){
        const novoCarrinho = [...carrinho]
        novoCarrinho.push(prods)
        setCarrinho(novoCarrinho)
        console.log(carrinho)

        const virarString = JSON.stringify(novoCarrinho)
        localStorage.setItem("local", virarString)
        setCarrinho(novoCarrinho)
       
    }
    
    const consultarItem = () => {
        if(localStorage.getItem("local")){
            const armazenarItem = localStorage.getItem("local")
            const pegarString = JSON.parse(armazenarItem)
            setCarrinho(pegarString)
        }
    }

    useEffect(()=> {
        consultarItem()
    }, [])

    


    return (


        <BrowserRouter>

        <Routes>

            <Route index element = {<TelaInicial/>} ></Route>



            <Route path = "/home" element = {<Home
            
            valorDoFiltro={valorDoFiltro}
            setValorDoFiltro={setValorDoFiltro}
            valorMin={valorMin}
            setValorMin={setValorMin}
            valorMax={valorMax}
            setValorMax={setValorMax}
            sortProdutos={sortProdutos}
            setSortProdutos={setSortProdutos}
            ordem = {ordem}
            setOrdem ={setOrdem}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            produtos={produtos}
            addCart = {addCart}
            
            
            />}></Route>


            <Route path="/seucarrinho" element = {<Carrinho
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            produtos={produtos}
            
            />}></Route>




        </Routes>
        
        
        
        </BrowserRouter>
    )



}