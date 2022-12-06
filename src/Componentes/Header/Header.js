import React from "react";
import imagemCarrinho from "../../imagem/carrinho-de-compras.png"
import {Titulo, HeaderContainer, Filtros, BotaoCarrinho, TituloContainer, Inputs, Ordenacao} from "./styled";

function Header (props){

    const entrarCarrinho =() =>{
        props.setGoToCarrinho(2)
    }
    // const voltarTelaPrincipal =() =>{
    //     props.setGoToCarrinho(1)
    // }
    
    

    return (
        
        <HeaderContainer>
            <TituloContainer>
                <Titulo>NAVIGATE-LOJA DE BRINQUEDOS ESPACIAIS</Titulo>
            </TituloContainer>
            <div>

                            
            <Filtros>           
                <Inputs>
                    <input
                    placeholder="Busca por produto"
                    value={props.query}
                    onChange={(event) => props.setQuery(event.target.value)}
                    />
                    <input 
                    placeholder="Preço mínimo"
                    type="number"
                    value={props.minPrice}
                    onChange={(event) => props.setMinPrice(event.target.value)}
                    />
            
                    <input 
                    placeholder="Preço máximo"
                    type="number"
                    value={props.maxPrice}
                    onChange = {(event) => props.setMaxPrice(event.target.value)}
                    />
                </Inputs>
                <Ordenacao>
                    <label for="sortingParameter">Ordenar preço:</label>
                
                    <select
                        value={props.order}
                        onChange={(event) => {props.setOrder(event.target.value)}}
                    >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                    </select>
                </Ordenacao>               
            </Filtros>
            {/* primeiro parenteses p executar sozinho, o segundo é chamndo a função */}
            
            
            <BotaoCarrinho>  
                {/* <button onClick={()=>voltarTelaPrincipal()}><h4>Voltar</h4></button>                   */}
                <button onClick={()=>entrarCarrinho()}><h5>CARRINHO ({props.QtdTotalItemCarrinho})</h5> <img src={imagemCarrinho} alt="Carrinho img" /></button>
                </BotaoCarrinho>
                </div>
        </HeaderContainer>
        
    )
}

export default Header