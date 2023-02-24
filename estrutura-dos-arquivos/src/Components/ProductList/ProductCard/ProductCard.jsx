import { Main, Section1, Section2, Section3, Img1, Img2, Img3,Button} from "./productStyle"

function ProductCard() {

    
    return (
        <Main>
            <Section1>
                <Img1 src={"https://picsum.photos/300/335?a=1"}/>
                <p>Nome do produto</p>
                <p>valor</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
            </Section1>

            <Section2>
                <Img2 src={"https://picsum.photos/300/335?a=2"}/>
                <p>Nome do produto</p>
                <p>valor</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
                
            </Section2>

            <Section3>
                <Img3 src="https://picsum.photos/300/335?a=3"/>
                <p>Nome do produto</p>
                <p>valor</p>
                <Button>
                    <button>Adiconar ao carrinho</button>
                </Button>
            </Section3>

        </Main>
    )
}

export default ProductCard

