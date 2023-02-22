import { ProductCardStyle, ContainerCard, Image, Button, Paragraph } from "./ProductCardStyle"


export default function ProductCard(props) {
    return(
        <ProductCardStyle>

        <ContainerCard>
            <Image src={props.product1.imageUrl} alt="produto1"/>
            <Paragraph>{props.product1.name}</Paragraph>
            <Paragraph>${props.product1.value}</Paragraph>
            <Button>Adicionar ao Carrinho</Button>
        </ContainerCard>

        <ContainerCard>
            <Image src={props.product2.imageUrl} alt="produto2"/>
            <Paragraph>{props.product2.name}</Paragraph>
            <Paragraph>${props.product2.value}</Paragraph>
            <Button>Adicionar ao Carrinho</Button>
        </ContainerCard>

        <ContainerCard>
            <Image src={props.product3.imageUrl} alt="produto3"/>
            <Paragraph>{props.product3.name}</Paragraph>
            <Paragraph>${props.product3.value}</Paragraph>
            <Button>Adicionar ao Carrinho</Button>
        </ContainerCard>

        </ProductCardStyle>
    )
}