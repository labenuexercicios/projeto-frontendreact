import React from "react";
import { useNavigate } from "react-router-dom"
import { handleCart } from "../Router/cordinator";
import { Cards } from "../Card/Cards";



export function Home(props) {

    const navigate = useNavigate("/seucarrinho")
  


    return (

        <div>

            
            <Cards
                setValorDoFiltro={props.setValorDoFiltro}
                valorDoFiltro={props.valorDoFiltro}
                valorMin={props.valorMin}
                setValorMin={props.setValorMin}
                valorMax={props.valorMax}
                setValorMax={props.setValorMax}
                sortProdutos={props.sortProdutos}
                setSortProdutos={props.setSortProdutos}
                ordem={props.ordem}
                setOrdem={props.setOrdem}
                addCart = {props.addCart}



            />



        </div>



    )


}
