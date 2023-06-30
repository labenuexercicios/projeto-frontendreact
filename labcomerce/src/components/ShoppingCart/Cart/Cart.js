import { PainelFiltro,InputContainer,
    ListaContainer,
    ListaTarefasContainer,
    Tarefa,
    SubTotal,
    RemoveButton,
    LinhaHorizontal, } from "./styled";
import bin from "../../../assents/bin.png";
import { useState } from "react";


 function Cart(props){

    console.log('props do cart' + props.cart)

    const deletItemCart = (produto)=>{
      const productDell = props.cart.find((item)=>item.id === produto.id)
  if(productDell.amount>1){
  const newC = props.cart.map((item)=>{
          if(item.id=== produto.id){
            return{...productDell, amount:productDell.amount-1}
          }else{
            return item;
          }
         
        })
        props.setCart(newC)
      }else{
        const newC= props.cart.filter((item)=>{
          return item.id != produto.id
        })
        props.setCart(newC)
      }
      
    }
let soma = 0
return (
    <aside>
    <PainelFiltro >
<h2>Carrinho</h2>
<ListaContainer>
        <ul>
          {props.cart.map((produto, index) => {
            soma=soma+(produto.value*produto.amount)
            return (
              <Tarefa key={index}>
                <p>Qtd:{produto.amount}</p>
                <p>{produto.name}</p>
                <RemoveButton>
                  <img src={bin} alt="" width="16px" onClick={()=>deletItemCart(produto)} />
                </RemoveButton>
               
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <SubTotal>
      <h3>Subtotal:R${soma.toFixed(2)}</h3>
      </SubTotal>
</PainelFiltro>
</aside>
    


);

}
 export default Cart;