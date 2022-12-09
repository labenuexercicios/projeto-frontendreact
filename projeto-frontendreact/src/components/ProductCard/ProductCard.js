import products from "../../assets/products.json"
import cartIcon from "../../assets/cart-white.png"
import { Main } from "./ProductCard.styled"
import ProdutcsScreen from "../../screens/Products/ProductsScreen"


function ProdutcCard(props) {

const { 
    product, 
    addToCart,
    isOnProductsScreen,
    isOnCartScreen,
    buscaNome,
    minPrice,
    maxPrice,
    asc,
    order
} = props


    return (

     <div className="main">
        {products
        .filter((item) => {
            return item.price >= minPrice || minPrice === ""
          })
          .filter((item) => {
            return item.price <= maxPrice || maxPrice === ""
          })
          .sort((a, b) => {
            return a.price - b.price
          })
          .sort(() => {
            if (order === "asc"){
              return 0
            } else {
              return -1
            }
          })
        .filter(
            (product) => product.name.toLowerCase().includes(buscaNome.toLowerCase())
        )
        .map((product)=> (
         <Main key={product.id} product={product}>
            <h3>{product.name}</h3>
            <div className="product-container">
                <img src={product.imageUrl} alt={product.imageAlt} />
                <h4>{product.description}</h4>
            </div>
            <div className="cart-price-icon">
                <span> R$ {product.price}</span>
                {
                  isOnProductsScreen && <button onClick={() => addToCart(product)}>
                  <img src={cartIcon} alt="cart icon"/>
              </button>
                }
                {
                    isOnCartScreen && <span>{product.quantity}</span>
                }
            </div>
         </Main>  
        ))}
    
        </div>
    );
}

export default ProdutcCard;