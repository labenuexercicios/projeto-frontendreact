import {BsBagCheck, BsCartDash,BsCartPlus } from "react-icons/bs";
import {TfiFaceSad} from "react-icons/tfi";


function Basket (props){
    const {cartItems, onAdd, onRemove} = props;
 
const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
const shippingPrice = itemsPrice > 200 ? 0 : 20;
const totalPrice = itemsPrice + shippingPrice;

// estava assim antes     return  <aside className="block col-1">
    return  <aside className="row">
<h2 className="h2Carrinho"><BsBagCheck></BsBagCheck> Itens do Carrinho</h2>
<div className="row">
    {cartItems.length === 0 && <div className="h2Carrinho">Carrinho vazio <TfiFaceSad></TfiFaceSad></div>}
    {cartItems.map((item) => (
<div key={item.id} className="row">
<div className="col-1">{item.name}</div>
<div className="col-1">
    {item.qty} x R$ {item.price.toFixed(2)}
</div>
<div className="col-1">
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
        <div className="row">
            <div className="col-2">Valor dos itens</div>
            <div className="col-1 text-right">R${itemsPrice.toFixed(2)}</div>
        </div>
        <div className="row">
            <div className="col-2">Valor da entrega</div>
            <div className="col-1 text-right">R${shippingPrice.toFixed(2)}</div>
        </div>
        <div className="row">
            <div className="col-2">
                <strong>Valor Total</strong>
                </div>
            <div className="col-1 text-right">
                <strong>R${totalPrice.toFixed(2)}</strong>
                </div>
        </div>
<hr />
<div className="row">
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