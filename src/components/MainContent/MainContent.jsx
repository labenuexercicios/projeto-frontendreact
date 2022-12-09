import { Products } from "../Products/Products"
import { ContentSale, ProductsSale } from "./style"
import naves from '../../Naves/naves.json'

export const MainContent = (props) => {

    const cart = []

    console.log(cart)
    return (
        <ContentSale>
            <article>Ofertas sem gravidade pra você</article>
            <ProductsSale>
                {naves
                .filter((nave)=>{
                    return props.search ? nave.nave.toLowerCase().includes(props.search.toLowerCase()) : nave
                })
                .filter((nave)=>{
                    return props.minValue ? nave.price >= props.minValue : nave
                })
                .filter((nave)=>{
                    return props.maxValue ? nave.price <= props.maxValue : nave
                })
                .sort((a,b) => {
                    if(props.order === 'Decrescente'){
                        return a.nave > b.nave ? -1:1
                    }else if(props.order === 'Crescente'){
                        return a.nave < b.nave ? -1:1
                    }
                })
                .sort((a,b) => {
                    if(props.orderPrice === 'MenorPreco'){
                        return a.price < b.price ? -1:1
                    }else if(props.orderPrice === 'MaiorPreco'){
                        return a.price > b.price ? -1:1
                    }
                })
                .map((nave, index)=>{
                    return <Products 
                    naves={nave} 
                    key={index} 
                    addToCart={props.addToCart}
                />
                })}
            </ProductsSale>
        </ContentSale>
    )
}