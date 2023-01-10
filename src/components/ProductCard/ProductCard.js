import { priceFormatter } from "../../uteis/priceFormatter"
import { ProductCardContainer } from "./ProductCard.styled"


  

function ProductCard (props){
    const{ 
      product, 
      addToCart,
      isOnProductsScreen,
      isOnCartScreen ,
      increaseQuantityInCart,
      decreaseQuantityInCart,
      deleteItemFromCart
    }= props
    
    return(
        <ProductCardContainer>
           
            <img src={product.imageUrl} alt={product.imageAlt} />
            <div>
              <div className="card-header">
                <h4>{product.name}</h4>
              </div>
              <div className="card-price">
                <span>{priceFormatter.format(product.price)}</span>
                {
                  isOnCartScreen && product.quantity > 1
                      && <button 
                      onClick={() => decreaseQuantityInCart(product)}
                  >
                    -
                  
                  </button>
                  
                }
                {
                  isOnCartScreen 
                    && <button 
                    onClick={() =>increaseQuantityInCart(product)}
                  >
                    +
                  
                  </button>
                  
                }
                
                {
                isOnProductsScreen 
                && <button onClick={()=> addToCart(product)}>+ Add to cart</button>
                }
                {
                  isOnCartScreen
                  && <span>Qtd: {product.quantity}</span>
                }
                {
                  isOnCartScreen 
                  && <button className="button-delete-item"
                  onClick={() =>deleteItemFromCart(product)}
                  >
                    
                    X
                  </button>
                }
              </div>

            </div>
          </ProductCardContainer>
    )
}
export default ProductCard
    