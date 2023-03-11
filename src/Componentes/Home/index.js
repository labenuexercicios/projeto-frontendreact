import { HomeMain, Order, OrderSelect, QuantidadeDeItens, Div } from "./styled"
import { Produtos } from "./Produtos"


export function Home({ onChangeOrder, order, AllProducts }) {



    return (

        <div>

            <Div>
                <QuantidadeDeItens>Quantidade de produtos:</QuantidadeDeItens>


                <Order> Ordenação :
                    <OrderSelect onChange={onChangeOrder}>
                        <option value="">Ordenar</option>
                        <option value="crescente">Crescente</option>

                        <option value="decrescente">Decrescente</option>
                    </OrderSelect></Order>

            </Div>
            <HomeMain>
                {AllProducts.sort((a, b) => {
                    if (order === "crescente") {
                        return a.value - b.value
                    }
                    if (order === "decrescente") {
                        return b.value - a.value
                    }
                }).map((Search) => {
                    return <Produtos Products={Search}
                    />
                }
                )}
            </HomeMain>




        </div>





    )




}