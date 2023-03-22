import { ContainerCard, Image, Button, Paragraph } from "./ProductCardStyle"
import cart from "../../../Images/cart.png"


export default function ProductCard(props) {

    const formatedAmount = props.product.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return (
        <ContainerCard className="card">
            <Image
                className="card_img"
                src={props.product.imageUrl} alt="product" />
            <Paragraph>{props.product.name}</Paragraph>
            <Paragraph>{formatedAmount}</Paragraph>
            <Button
                onClick={() => (props.addItemCart())}>
                <img src={cart} alt="" width="35px" />
            </Button>
        </ContainerCard>
    )
}