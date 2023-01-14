
import {BsCartPlus, BsCartDash} from "react-icons/bs";

function Product (props) {

    // adicionamos o onAdd e onRemove no app.js e na main, e então colocamos aqui tb
const {item, product, onAdd, onRemove} = props;
// aqui temos o array de produtos, onde chamo todas as informações que quero que apareça. A props recebe o objeto product

return (
  
    <div className="card">
<img className="small" src={product.image} alt={product.name}/>
<div className="produtos">{product.name}</div>
<div className="produtos-preco">R${product.price.toFixed(2)}</div>
<div>
    {item ? <div>
        <button onClick={() => onRemove(item)} className="remove">
        <BsCartDash></BsCartDash>
        </button>
<span className="p-1">{item.qty}</span>
<button onClick={() => onAdd(item)} className="add">
        <BsCartPlus></BsCartPlus>
        </button>
    </div> : 
       <button onClick={() => onAdd(product)}>Adicionar ao carrinho</button>
    }
 
</div>

    </div>
);

}

export default Product;