import Product from "./Product";

// essa props no app js está recebendo o nosso array de objetos

function Main(props) {
    // colocamos o onAdd e onRemove depois de criar essas funções no App.js
    const { cartItems ,products, onAdd, onRemove } = props;

    return (
        //estava assim antes <div className="block col-2">
        <div className="card">
            <h2>Produtos</h2>
            <div>
                {products.map((product) => (
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