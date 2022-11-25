import { Products } from "../Products/Products"
import { ContentSale, ProductsSale } from "./style"

export const MainContent = () => {
    return (
        <ContentSale>
            <article>Ofertas sem gravidade pra você</article>
            <ProductsSale>
                <Products/>  
            </ProductsSale>
        </ContentSale>
    )
}