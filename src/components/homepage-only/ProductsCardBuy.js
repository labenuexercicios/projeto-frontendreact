import { ProductInfoSection, ProductImage, ProductDescription, Button } from "./styled-components"

export const ProductCardBuy = (props) => {
    function onChangeInput(e) {
        props.setAmountToBuy(e.target.value)
    }
    return (
        <ProductInfoSection>
            <ProductImage src={props.imageUrl} alt={props.name} />
            <ProductDescription>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>R$ {props.price}</p>
                <input
                type="number"
                value={props.amountToBuy}
                onChange={onChangeInput}/>
                <Button onClick={props.addToCart}>Adicionar ao carrinho!</Button>
            </ProductDescription>
        </ProductInfoSection>
    )
}