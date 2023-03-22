import { HomeMain, Order, OrderSelect, QuantidadeDeItens, Div } from "./styled"
import { Produtos } from "./Produtos"


export function Home({ onChangeOrder, order, AllProducts, cart, setCart, minFilter, maxFilter, searchFilter}) {


   
    

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
                {AllProducts.filter((nomeQualquer)=>{return searchFilter? nomeQualquer.name.toLowerCase().includes(searchFilter.toLowerCase()) :nomeQualquer})

                .filter((valueFilter)=>{

                    if(minFilter <= valueFilter.value && maxFilter ===""){
                        return valueFilter
                    }else
                    if(minFilter <= valueFilter.value && maxFilter >= valueFilter.value){

                        return valueFilter
                    }else if (minFilter === "" && maxFilter === ""){
                        return valueFilter

                    }}            
                )                                              
                .sort((a, b) => {
                    if (order === "crescente") {
                        return a.value - b.value
                    }
                    if (order === "decrescente") {
                        return b.value - a.value
                    }
                }).map((Search) => {
                    return <Produtos
                    setCart = {setCart}
                    cart={cart}
                    AllProducts={AllProducts}
                    Products={Search}
                    />
                }
                )}
            </HomeMain>



        </div>





    )




}