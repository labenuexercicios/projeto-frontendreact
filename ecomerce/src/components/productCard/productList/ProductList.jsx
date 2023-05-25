import { CardBox, CardTexBox, Imagem } from "./productListStyle"

function ProductList({ productList }) {
    console.log(productList)
    return (
        <>
            <CardBox>
                <Imagem src={productList.imageUrl} />
                <CardTexBox>
                    <p>{productList.name}</p>
                    <p>R$ {productList.value}</p>
                    <button>Adicionar item</button>
                </CardTexBox>
            </CardBox>
        </>
    )
}
export default ProductList 