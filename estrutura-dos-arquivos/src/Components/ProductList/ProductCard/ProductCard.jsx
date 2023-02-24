
import { Main, Section1, Section2, Section3, Img1, Img2, Img3,Button} from "./productStyle"

function ProductCard(props) {
    console.log(props)
    return (
        <Main>
            <Section1>
                <Img1 src={props.productList[0].imageUrl}/>
                <p>{props.productList[0].name}</p>
                <p>{props.productList[0].value}</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
            </Section1>

            <Section2>
                <Img2 src={props.productList[1].imageUrl}/>
                <p>{props.productList[1].name}</p>
                <p>{props.productList[1].value}</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
                
            </Section2>

            <Section3>
                <Img3 src={props.productList[2].imageUrl}/>
                <p>{props.productList[2].name}</p>
                <p>{props.productList[2].value}</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
            </Section3>

        </Main>
    )
}

export default ProductCard

