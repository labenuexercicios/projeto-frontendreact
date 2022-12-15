import Products from "../../assets/products.json"
import ProductsCard from "../../Components/ProductsCard/ProductsCard"
import { Main } from "./ProductsScreen.styled"



function ProductsScreen(props) {

    const{addToCart}=props
    // const filterProductsName = () => {
    //     return Products.filter((Product) => Product.name.toLocaleLowerCase().includes("".toLocaleLowerCase()))
    // }
    
    return (
        <Main>
            <section>
                <h1>Tickets</h1>
                <hr />
                {
                    Products.map((Product) => (
                        <ProductsCard
                        addToCart={addToCart}
                            Product={Product}
                            key={Product.id}
                            isOnProductsScreen={true}
                            />
                    ))

                }
            </section>
        </Main>
    );
}


export default ProductsScreen
