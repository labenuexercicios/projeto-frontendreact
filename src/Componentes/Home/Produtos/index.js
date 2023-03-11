import { ProductCard, ButtonProducts, ImageProducts, ImageP } from "./styled"



export function Produtos(props) {

    return (
        <div>
            
            <ProductCard>
            <ImageProducts>{props.Products.imageUrl}</ImageProducts>
            <ImageP> {props.Products.name}</ImageP>
                <ImageP><b>Valor:</b> R$ {props.Products.value}</ImageP>
                <ButtonProducts>Adicionar</ButtonProducts>
            </ProductCard>
        </div>
    )
}