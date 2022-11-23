import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Main } from "./ProductsScreen.styled"

function ProductsScreen(props) {

    const { addToCart, filterText } = props

    const filterProductsByText = () => {
        return products.filter(
            (product) => product.name.toLowerCase().includes(filterText.toLowerCase())
        )
    }

    return (
        <Main>
            <section>
                <h1>Products</h1>
                <hr />
                {
                    filterProductsByText()
                    .map((product) => (
                        <ProductCard
                            product={product}
                            addToCart={addToCart}
                            key={product.id}
                            isOnProductsScreen={true}
                        />
                    ))
                }
            </section>
        </Main>
    )
}

export default ProductsScreen
