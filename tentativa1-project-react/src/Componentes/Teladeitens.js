import React from "react";
import { Escopodositens, Estilodositens } from "../instyle";


export function Teladeitens(props){

    let x = 0;
    function contador(){

    }

    return(

        <div>
            <Escopodositens>
            <article>
                    <ul>
                    <h3>Kit 1:</h3>
                    <img src="jinko.jpg" alt="img jinko"></img>
                    <p>
                        Marca do Painel Solar: 
                        <b>Jinko</b>
                    </p>
                    <p>Geração do módulo: <b>450w</b></p>
                    <p>Obs.: <b>Possuí sistema anti-furto</b></p>
                    </ul>
                </article>
                </Escopodositens>
            <Escopodositens>
            <article>
                    <ul>
                    <h3>Kit 2:</h3>
                    <img src="canadian.jpg" alt="img Canadian"></img>
                    <p>
                    Marca do Painel Solar: 
                    <b>Jinko</b>
                    </p>
                    <p>Geração do módulo: <b>450w</b></p>
                    <p>Obs.: <b>Possuí sistema anti-furto</b></p>
                    </ul>
                </article>
            </Escopodositens>
            <Escopodositens>
            <article>
                    <ul>
                    <h3>Kit 3:</h3>
                    <img src="trina.jpg" alt="img Trina"></img>
                    <p>
                    Marca do Painel Solar: 
                    <b>Jinko</b>
                    </p>
                    <p>Geração do módulo: <b>450w</b></p>
                    <p>Obs.: <b>Possuí sistema anti-furto</b></p>
                    </ul>
                </article>
            </Escopodositens>
        </div>



    )
}