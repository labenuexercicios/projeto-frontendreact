import FiltersMain from "../FilterMain/FiltersMain";
import Product from "../Product/Product";

export default function Main (props){
    const {products, cartItems, addProduct, removeProduct,
            query, minPrice, maxPrice, sortingOrder, setSortingOrder} = props;
    
    return (
        <div class='block col-2'>
            <>
                <FiltersMain 
                sortingOrder={sortingOrder} 
                setSortingOrder={setSortingOrder}
                />
                <hr />
            </>
            <h2>Satelites</h2>
            <div class="row">
                {products
                .filter((product) => {
                    return product.name.toLowerCase().includes(query.toLowerCase())
                })
                .filter((product) => {
                    return product.price >= minPrice || minPrice === ""
                })
                .filter((product) => {
                    return product.price <= maxPrice || maxPrice === ""
                })
                .sort((current, next) => sortingOrder === "asc" ? 
                        current.price - next.price : -(current.price - next.price))
                .map((product) =>(
                    <Product product={product}
                    item={cartItems.find((p) => p.id === product.id)}
                    addProduct={addProduct} 
                    removeProduct={removeProduct}></Product>

                ))}
            </div>
        </div>
        
    );
}