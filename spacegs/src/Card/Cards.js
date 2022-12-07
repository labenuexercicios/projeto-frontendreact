import React from "react";
import produtos from "../produtos.json"
import { GlobalSyled } from "../Styleds/GlobalSyled";
import { FilterStyled } from "../Styleds/FilterStyled";
import { StyledCards } from "../Styleds/StyledCards";
import { useNavigate } from "react-router-dom"
import { handleCart } from "../Router/cordinator";


export function Cards(props) {
    // const valorDoFiltro = props.valorDoFiltro
    // const setValorDoFiltro = props.setValorDoFiltro
    // const valorMin = props.valorMin
    // const setValorMin = props.setValorMin
    // const valorMax = props.valorMax
    // const setValorMax = props.setValorMax
    // const sortProdutos = props.sortProdutos
    // const setSortProdutos = props.setSortProdutos
    // const ordem = props.ordem
    // const setOrdem = props.setOrdem
    // const addCart = props.addCart

    console.log(produtos)

    const navigate = useNavigate()


    return (

        <GlobalSyled>



            <FilterStyled>

                <h1>S T A R S  <br /> S T O R E</h1>

                <input
                    className="campoDeBusca"
                    placeholder="pesquisa"
                    value={props.valorDoFiltro}
                    onChange={(e) => { props.setValorDoFiltro(e.target.value) }}


                />

                <input
                    className="campoDeFiltro"
                    placeholder="Valor Minimo"
                    type={"number"}
                    value={props.valorMin}
                    onChange={(e) => { props.setValorMin(e.target.value) }}


                />

                <input
                    className="campoDeFiltro"
                    placeholder="Valor Maximo"
                    type={"number"}
                    value={props.valorMax}
                    onChange={(e) => { props.setValorMax(e.target.value) }}


                />

                <span className="campoDeFiltro">
                    <label for="sortProdutos"> </label>
                    <select
                        name="sortProdutos"
                        value={props.sortProdutos}
                        onChange={(e) => { props.setSortProdutos(e.target.validationMessage) }}



                    >
                        <option value="preco">Preço</option>
                        <option value="nome">Nome</option>



                    </select>
                </span>

                <span className="campoDeFiltro">
                    <label for="ordem"></label>
                    <select
                        name="Ordem"
                        value={props.ordem}
                        onChange={(e) => { props.setOrdem(e.target.validationMessage) }}



                    >
                        <option value="cres">Crescente</option>
                        <option value="desc">Decrescente</option>



                    </select>
                </span>

                <button onClick={() => handleCart(navigate)} 
                className="foguetinho"
                
                > <img src="https://w7.pngwing.com/pngs/233/658/png-transparent-rocket-computer-icons-rockets-spacecraft-monochrome-black.png" height={"90px"}  ></img></button>







            </FilterStyled>




            <StyledCards>

                {
                    produtos
                        .filter((prod) => {
                            return prod.nome.toLocaleLowerCase().includes(props.valorDoFiltro)
                        })
                        .filter((prod) => {
                            if (prod.preco >= props.valorMin && prod.valor <= props.valorMax){
                                return prod
                            }else{
                                return prod

                            }
                            
                        })
                        .filter((prod) => {
                            return (prod.preco <= props.valorMax || props.valorMax === "")
                        })
                        .sort((atualValue, proxValue) => {

                            switch (props.sortProdutos) {
                                case "nome":
                                    return atualValue.id - proxValue.id

                                default:
                                    return atualValue.preco - proxValue.preco



                            }




                        })
                        .sort(() => {
                            if (props.ordem === "cres") {
                                return 0
                            } else {
                                return -1
                            }

                        }).map(itens => {

                            return (

                               
                                    <div className="blocos">
                                        <img className="imagem" src={itens.img} width="320" height="205" />
                                        <p>{itens.nome}</p>
                                        <p>{itens.preco}</p>
                                        <p>{itens.descricao}</p>
                                        


                                        <button onClick={() => props.addCart(itens)}>Adicionar no seu SpaceCar</button>



                                    </div>


                               

                            )

                        })
                }




            </StyledCards>
        </GlobalSyled>


    )
}