import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Topo,Cards } from './homeStyle'

function Home() {
    return (
        <>
            <Topo>
                <div>
                    <p>Quantidade de produtos:</p>
                </div>
                
                <div className='ordenacao'>
                    <p>Ordenação</p>
                    <form type="select">
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </form>
                </div>
            </Topo>
            <Cards>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Cards>
            
        </>
    )
}

export default Home