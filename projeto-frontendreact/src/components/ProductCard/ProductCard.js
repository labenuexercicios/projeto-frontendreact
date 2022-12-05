import products from "../../assets/products.json"
import cartIcon from "../../assets/cart-white.png"
import { Main } from "./ProductCard.styled"


function ProdutcCard(props) {



    return (

     <div>
        {products.map((product)=> (
         <Main key={product.id}>
            <h3>{product.name}</h3>
            <div className="product-container">
                <img src={product.imageUrl} alt={product.imageAlt} />
                <h4>{product.description}</h4>
            </div>
            <div>
                <span>R$ {product.price}</span>
                <button>
                    <img src={cartIcon} alt="cart icon"/>
                </button>
            </div>
         </Main>  
        ))}
    
        </div>
    );
}

export default ProdutcCard;