import React from "react";
import {useNavigate} from "react-router-dom"
import { handleHome } from "../Router/cordinator";
import { StyledInicial } from "../Styleds/StyledInicial";



export function TelaInicial (){

    const navigate = useNavigate()

    return(


        <StyledInicial className="all">
            
            <div className="BordaDosParagrafos">
            <div className='Titulo-Site'>
                


                <h1 className='h1'>   🚀  S T A R  S T O R E  🚀    </h1>
                <h4>A loja espacial espera por você! clique no foguete para entrar no nosso mundo!</h4>
                <button onClick={() => handleHome(navigate)}> Ir para loja GS </button>

            </div>
            </div>
        </StyledInicial>



       
    )




}