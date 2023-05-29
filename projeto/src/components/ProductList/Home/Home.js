import React from "react";
import { Homee, article } from "./HomeStyle";
import logo from "../../../fotos/camisa 1.png"
import logo1 from "../../../fotos/camisa 2.png"
import logo2 from "../../../fotos/camisa 3.png"
function Home(){

    return (

        <Homee>
            <section>
        Quantidade de produtos
        <label>
            Ordenação:
            <select>
                <option> Crescente</option>
                <option> Decrecente</option>
            </select>
        
        </label>
        </section>
        <article>
          
        <img src={logo}alt='camisa' height={350}/> 
        <p>camisa 1</p>
        <p>valor:</p>
        <button>Adicionar ao carrinho</button>

        <img src={logo1} alt='camisa' height={300}/>
        <p>camisa 1</p>
        <p>valor:</p>
        <button>Adicionar ao carrinho</button>
        <img src={logo2} alt='camisa' height={300}/>
        <p>camisa 1</p>
        <p>valor:</p>
        <button>Adicionar ao carrinho</button>
        </article>
        </Homee>
    )
}

export default Home