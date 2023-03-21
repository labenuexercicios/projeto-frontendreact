import { DivCard, P, Button } from "./productCardStyle"

export default function ProductCard({product}){   

    return(
        <DivCard>
            {product.imageUrl}
            <P>{product.name}</P>
            <P> R${product.value.toFixed(2)}</P>
            <Button>ADICIONAR</Button>
        </DivCard>
    )
}