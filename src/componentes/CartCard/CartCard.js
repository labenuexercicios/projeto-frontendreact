import styles from "./CartCard.module.css"
 import {AiOutlineShoppingCart} from "react-icons/ai"



function CartCard(props){


    return (
    <>
    
    <div className={styles.container}>
      <p className={styles.text}>Esse é o cart:</p>
      <AiOutlineShoppingCart className={styles.carrinho}/>
      <strong className={styles.text}>Valor total: R$ </strong>
    </div> 

    <div>
        <p>{props.itens.name}</p>
        <p>{props.itens.price}</p>
        <p>{props.itens.amount}</p>
    </div>  
    </>
    );
}

export default CartCard