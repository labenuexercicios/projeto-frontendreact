import {CarrinhoStyle} from './styles'
import {useCart} from "react-use-cart"
const Carrinho = () => {

const {isEmpty,
  totalUniqueItems,
  items,
  totalItems,
  cartTotal,
  updateItemQuantity,
  removeItem,
  emptyCart,
} = useCart("");
if(isEmpty) return  <text> Seu carrinho está vazio</text>

  return (
    <div>
       <CarrinhoStyle>
        <h2>Carrinho({totalUniqueItems}) total de items:({totalItems})</h2>
        <h3>{items.map((item,index)=>{
          return(
          <tr key={index}>
            <td>
              <img src={item.imageUrl} alt={item.imageAlt} />
            </td>
            <td>Pacote de viagem para {item.name} </td>
            <p>{item.price*item.quantity}            </p>
            <td> Qtd ({item.quantity})           </td>
            <td>
              <button 
              onClick={()=> updateItemQuantity(item.id,item.quantity -1)}
              >-</button>
              <button
              onClick={()=> updateItemQuantity(item.id,item.quantity +1)}
              >+</button>
              <button 
              onClick={()=> removeItem(item.id)}
              >Remover</button>
            </td>
          </tr>)
        })}</h3>

        <h2>Valor Total: R${cartTotal}</h2>
        <button onClick={()=> emptyCart()}>Limpar o carrinho</button>
       </CarrinhoStyle>

       </div>
  )
}

export default Carrinho