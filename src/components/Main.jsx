import Product from "./Product";

// essa props no app js está recebendo o nosso array de objetos

function Main(props) {
    // colocamos o onAdd e onRemove depois de criar essas funções no App.js
    const { cartItems ,products, onAdd, onRemove, query, minPrice, maxPrice, sortingParameter, order} = props;

    return (
               <div className="row-main">
            <div className="h2-main"><h2>Produtos</h2></div>
            
            <div className="produtos-main">
                {/* colocando o filtro eu inclui o .filter depois */}
                {products
                .filter((product)=> { 
                    return product.name.toLowerCase().includes(query.toLowerCase()) 
                })
                .filter((product)=> { 
                    return product.price>=minPrice || minPrice===""
                })
                .filter((product)=> { 
                    return product.price<=maxPrice ||maxPrice===""
                })
                .sort((currentValue, nextValue) => {
                    switch(sortingParameter) {
                        case "price":
                      return currentValue.price - nextValue.price      
                     default:
                        return currentValue.name.localeCompare (nextValue.name)     
                    }
                    
                })
                .sort (() => {
                    if(order==="asc") {
                        return 0
                    } else {
                    return -1
                    }
                })
                .map((product) => (
                    // esse product={product} é o objeto passado para o component Product, para passar (product) para o objeto products e o component Product
                    <Product 
                    key={product.id} 
                    product={product}
                    item= {cartItems.find((x) => x.id === product.id)}
                    onAdd={onAdd} 
                    onRemove= {onRemove}>
                    </Product>
                ))}

            </div>

        </div>
    );
}

export default Main;