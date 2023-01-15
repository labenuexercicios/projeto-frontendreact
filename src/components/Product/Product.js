import { ImageProduct, ProductCard } from "./styled";


export default function Product(props) {
    const { product, item, addProduct, removeProduct } = props;
    return (
        <ProductCard>
            
            <img class="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>R${product.price.toFixed(1)} mi</div>
            <div>
                {item ? ( <div className="center">
                            <button onClick={()=> removeProduct(product)} className="addRemove ">
                            -
                            </button> 
                            <span className="p-1"> {item.qty} </span>
                            <button onClick={()=> addProduct(product)} className= "addRemove">
                            +
                            </button>
                          </div>
                        ) : (<button onClick={()=> addProduct(product)} >Adicionar</button>)
                }
            </div>
        </ProductCard>
    );
}