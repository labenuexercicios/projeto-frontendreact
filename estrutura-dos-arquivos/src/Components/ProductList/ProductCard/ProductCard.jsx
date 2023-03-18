import { ContainerCards } from "./ProductStyle"
import { Img, Button } from "./ProductStyle"


const ProductCard = (props) => {


    return (
        <ContainerCards>

            <div>
                <Img src={props.image} />
                <p>{props.name}</p>
                <p>{props.value}</p>
                <Button >Adiconar ao carrinho</Button>
            </div>



        </ContainerCards>

    )
}
export default ProductCard