import { ProductContainer } from "./ProductCardStyle";


function ProductCard(props) {
  console.log({props})
    return (
    <>
    <ProductContainer>
    <img alt="image" src={`https://picsum.photos/300/335?a=${props.product[0].id}`}/>
    <p><b>Product:</b> {props.product[0].name} </p>
    <p><b>Price:</b> US${props.product[0].value}</p>
    <button>Add to Cart</button>    
    </ProductContainer>
    <ProductContainer>
    <img alt="image" src={`https://picsum.photos/300/335?a=${props.product[1].id}`}/>
    <p><b>Product:</b> {props.product[1].name} </p>
    <p><b>Price:</b> US${props.product[1].value}</p>
    <button>Add to Cart</button>    
    </ProductContainer>
    <ProductContainer>
    <img alt="image" src={`https://picsum.photos/300/335?a=${props.product[2].id}`}/>
    <p><b>Product:</b> {props.product[2].name} </p>
    <p><b>Price:</b> US${props.product[2].value}</p>
    <button>Add to Cart</button>    
    </ProductContainer>
    
    </>
    );
  }

  export default ProductCard;