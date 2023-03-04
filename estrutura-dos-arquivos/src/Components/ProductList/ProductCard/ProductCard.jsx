
import { Main, Section1, Section2, Section3, Img1, Img2, Img3,Button} from "./productStyle"

function ProductCard(props) {
    console.log(props)
    return (
        <Main>
            <Section1>
                <Img1 src={props.productList[0].imageUrl}/>
                <p>{props.amount}</p>
                <p>{props.cart}</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
            </Section1>

            <Section2>
                <Img2 src={props.productList[1].imageUrl}/>
                <p>{props.amount}</p>
                <p>{props.cart}</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
                
            </Section2>

            <Section3>
                <Img3 src={props.productList[2].imageUrl}/>
                <p>{props.amount}</p>
                <p>{props.cart}</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
            </Section3>

        </Main>
    )
}

export default ProductCard

