import React from "react";
import produtos from "../produtos.json"
import { GlobalSyled } from "../Styleds/GlobalSyled";
import { FilterStyled } from "../Styleds/FilterStyled";
import { StyledCards } from "../Styleds/StyledCards";
import {useNavigate} from "react-router-dom"
import { handleCart } from "../Router/cordinator";


export function Cards(props) {
    const valorDoFiltro = props.valorDoFiltro
    const setValorDoFiltro = props.setValorDoFiltro
    const valorMin = props.valorMin
    const setValorMin = props.setValorMin
    const valorMax = props.valorMax
    const setValorMax = props.setValorMax
    const sortProdutos = props.sortProdutos
    const setSortProdutos = props.setSortProdutos
    const ordem = props.ordem
    const setOrdem = props.setOrdem
    const addCart = props.addCart
    
    const navigate = useNavigate()


    return (

        <GlobalSyled>

           

            <FilterStyled>

                <h1>S T A R S  <br/> S T O R E</h1>

                <input 
                    className="campoDeBusca"
                    placeholder="pesquisa"
                    value={valorDoFiltro}
                    onChange={(e) => { setValorDoFiltro(e.target.value) }}


                />

                <input
                    className="campoDeFiltro"
                    placeholder="Valor Minimo"
                    type={"number"}
                    value={valorMin}
                    onChange={(e) => { setValorMin(e.target.value) }}


                />

                <input
                    className="campoDeFiltro"
                    placeholder="Valor Maximo"
                    type={"number"}
                    value={valorMax}
                    onChange={(e) => { setValorMax(e.target.value) }}


                />
                
                <span className="campoDeFiltro">
                    <label for="sortProdutos"> </label>
                <select
                name="sortProdutos"
                value={sortProdutos}
                onChange= {(e) => {setSortProdutos(e.target.validationMessage)}}
                
               
                
                >
                <option value = {"preco"}>Preço</option>
                <option value = {"nome"}>Nome</option>
                


                </select>
                </span>

                <span className="campoDeFiltro">
                    <label for="ordem"></label>
                <select
                name="Ordem"
                value={ordem}
                onChange= {(e) => {setOrdem(e.target.validationMessage)}}
                
               
                
                >
                <option value = {"cres"}>Crescente</option>
                <option value = {"desc"}>Decrescente</option>
                


                </select>
                </span>

                <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>







            </FilterStyled>




            <StyledCards>

                {
                    produtos
                        .filter((prod) => {
                            return prod.nome.toLocaleLowerCase().includes(valorDoFiltro)
                        })
                        .filter((prod) => {
                            return prod.preco >= valorMin 
                        })
                        .filter((prod) => {
                            return prod.preco <= valorMax 
                        })
                        .sort((atualValue, proxValue) => {

                            switch (sortProdutos){
                                case "preco":
                                return atualValue.preco - proxValue.preco
                                default:
                                    return atualValue.estilo.localeCompare(proxValue.estilo)
                                                      
                            
                            
                            }




                        })
                        .sort(()=> {
                            if (ordem === "cres"){
                                return 0
                            }else{
                                return -1
                            }

                        })
                    
                        .map( prod => {

                            return (

                                <section>
                                    <div className="blocos">
                                        <img className="imagem" src={prod.img} width="320" height="205" />
                                        <p>{prod.nome}</p>
                                        <p>{prod.preco}</p>
                                        <p>{prod.descricao}</p>
                                        
                                        
                                        <button onClick={() => addCart(prod)}>Adicionar no seu SpaceCar</button>



                                    </div>


                                </section>

                            )

                        })
                }




            </StyledCards>
        </GlobalSyled>


    )
}