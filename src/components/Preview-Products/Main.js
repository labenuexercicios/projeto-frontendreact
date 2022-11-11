import { MainContainer, NavContainer, ListaContainer } from './Main.styled.'
import Filter from '../Filter-Side/Filter'
import Card from '../Card-Products/Card'

import { useState } from 'react'

function Main(props) {
    const {products,
        currCart,
        addToCart
     } = props


    return (
        <MainContainer>
            <nav>
                <p>Foram encontradas 10 produtos para "XPG"
                </p>
                <div>
                <label>Ordenar por:</label>
                <select>
                    <option>Destaque</option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                    <option>Maior Preço</option>
                    <option>Menor Preço</option>
                    <option>Media de Avaliação</option>
                    <option>Maior Desconto</option>
                </select>
                </div>
            </nav>

            <Filter />

            <section className='filter-side'>
                {products
 
                .map((product) => {
  

                    return (
                        <Card key={product.id}                        
                        product={product}
                        addToCart={addToCart}
                        />
                    )
                })
                }

            </section>
        </MainContainer>


    )


}
export default Main