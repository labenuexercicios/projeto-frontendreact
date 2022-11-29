import { Products } from "../Products/Products"
import { ContentSale, ProductsSale } from "./style"
import naves from '../../Naves/naves.json'

export const MainContent = () => {


    return (
        <ContentSale>
            <article>Ofertas sem gravidade pra você</article>
            <ProductsSale>
                {naves.map((nave)=>{
                    return <Products naves={nave} />
                })}
            </ProductsSale>
        </ContentSale>
    )
}