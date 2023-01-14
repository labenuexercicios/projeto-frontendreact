import {BsBagCheck, BsCartDash,BsCartPlus } from "react-icons/bs";
import {TfiFaceSad} from "react-icons/tfi";


function Basket (props){
    const {cartItems, onAdd, onRemove} = props;
 
const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
const shippingPrice = itemsPrice > 200 ? 0 : 20;
const totalPrice = itemsPrice + shippingPrice;


    return  <aside className="carrinho">
<h2 className="h2Carrinho"><BsBagCheck></BsBagCheck> Itens do Carrinho</h2>
<div className="carrinho-item-frete">Frete grátis acima de R$200,00 em compras. Aproveite!!</div>
<div className="carrinho">
    {cartItems.length === 0 && <div className="h2Carrinho">Carrinho vazio <TfiFaceSad></TfiFaceSad></div>}
    {cartItems.map((item) => (
    
<div key={item.id} className="carrinho">
<div className="carrinho-item">{item.name}</div>
<div className="carrinho-item">
    {item.qty} x R$ {item.price.toFixed(2)}
</div>
<div className="carrinho-item">
    <button onClick={() => onRemove(item)} className="remove">
    <BsCartDash></BsCartDash>
    </button>
    <button onClick={() => onAdd(item)} className="add">
    <BsCartPlus></BsCartPlus>
    </button>
    </div>

</div>
    ))}
    {cartItems.length !== 0 && (
        <>
        <hr />
        <div className="carrinho-item-final">
            <div className="carrinho-item-final">Valor dos itens: </div>
            <div className="carrinho-item-final">R${itemsPrice.toFixed(2)}</div>
        </div>
        <div className="carrinho-item-final">
            <div className="carrinho-item-final">Valor da entrega: </div>
            <div className="carrinho-item-final">R${shippingPrice.toFixed(2)}</div>
        </div>
        <div className="carrinho-item-final">
            <div className="carrinho-item-final">
                <strong>Valor Total: </strong>
                </div>
            <div className="carrinho-item-final">
                <strong>R${totalPrice.toFixed(2)}</strong>
                </div>
        </div>
<hr />
<div>
    <button onClick={() => alert ('Compra finalizada \n Obrigada pela preferência!')}>
        Finalizar
    </button>
</div>

        </>
    )}
</div>
    </aside>;
    }
    
    export default Basket;