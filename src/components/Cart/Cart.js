export default function Cart (props){
    const { cartItems, addProduct, removeProduct } = props
    const totalPrice = cartItems.reduce((a, b) => a + b.qty*b.price, 0)  
    return (
        <aside class='block col-3'>
            <h3>Carrinho</h3>
            <div>
                {cartItems.length === 0 && <div>Carrinho vazio! Bô Comprar!!!</div>}
                {cartItems.map((item) => (
                    <div key={item.id} class="row">
                        <div class='col-1'>{item.name}</div>
                        <div class='col-1'>
                            <button onClick={()=> removeProduct(item)} class = "addRemove">
                            -
                            </button>
                            <button onClick={()=> addProduct(item)} class = "addRemove">
                            +
                            </button> 
                        </div>
                        <div class="col-1 text-right">
                        {item.qty} x R${item.price.toFixed(1)} mi
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                        <hr />
                        <div clas='row'>
                            <span className="cart-col-1"> 
                                <strong>Preço Total</strong> 
                            </span>
                            <span className="cart-col-2">
                                <strong>R${totalPrice.toFixed(1)} mi</strong>
                            </span>
                        </div>
                    </>
                )}

            </div>
        </aside>
    );
}