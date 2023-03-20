import { ContainerCard, Image, Button, Paragraph } from "./ProductCardStyle"
import cart from "../../../images/cart.png"


export default function ProductCard(props) {

    return (
        <ContainerCard className="card">
            <Image
                className="card_img"
                src={props.product.imageUrl} alt="product" />
            <Paragraph>{props.product.name}</Paragraph>
            <Paragraph>R${props.product.value.toFixed(2)}</Paragraph>
            <Button
                onClick={() => (props.addItemCart())}>
                <img src={cart} alt="" width="35px" />
            </Button>
        </ContainerCard>
    )
}