
import produtos from "../../assets/produtos.json"
import { Main } from "./telaProduto.styled";
import ProdutoCard from "../../componentes/header/ProdutoCard/ProdutoCard";
import { useState } from "react";


function TelaProduto(props) {

    const [query, setQuery] = useState("")
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [sort, setSort] = useState("")


    return (
        <>

            <Main>
                <div className="nav-produto">
                    <h1>PRODUTOS</h1>

                    <input
                        className="pesquisar"
                        value={query}
                        onChange={(ev) => { setQuery(ev.target.value) }}


                    ></input>


                    <input
                        placeholder="Mínimo Preço"
                        type="number"
                        value={minPrice}
                        onChange={(ev) => { setMinPrice(ev.target.value) }}


                    ></input>

                    <input
                        placeholder="Máximo preço"
                        type="number"
                        value={minPrice}
                        onChange={(ev) => { setMaxPrice(ev.target.value) }}


                    ></input>

                    <select
                        value={sort}
                        onChange={(ev) => { setSort(ev.target.value) }}
                        name="sort"
                    >

                        <option
                            value={"crescente"}

                        >crescente</option>

                        <option
                            value={"decrescente"}

                        >decrescente</option>
                    </select>


                </div>
                <section>

                    {
                        produtos

                            .filter((produtos) => {
                                return produtos.name.toLowerCase().includes(query)
                            })

                            .filter((produtos) => {
                                return produtos.price >= minPrice || minPrice === ""
                            })

                            .filter((produtos) => {
                                return produtos.price <= maxPrice || maxPrice === ""
                            })

                            .sort(() => {
                                if (sort === "crescente") {
                                    return 0
                                } else {
                                    return -1
                                }
                            })

                            .map((produtos) => (
                                <ProdutoCard
                                    produtos={produtos}
                                    adicionaCarrinho={props.adicionaCarrinho}
                                    key={produtos.id}
                                    estaNaTelaProduto={true}

                                />

                            ))
                    }
                </section>
            </Main>

        </>
    )
}

export default TelaProduto