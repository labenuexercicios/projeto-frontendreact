import { CardBox, CardTexBox, ImageBox } from "./productListStyle"

function ProductList() {
    return (
        <>
            <CardBox>
                <ImageBox />
                <CardTexBox>
                    <p>Nome do produto</p>
                    <p>Valor do produto</p>
                    <button>Adicionar item</button>
                </CardTexBox>
            </CardBox>
        </>
    )
}
export default ProductList 