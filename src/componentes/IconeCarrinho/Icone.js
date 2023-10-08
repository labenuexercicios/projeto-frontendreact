import styles from "./Icones.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function Icones () {

    return (

        <>
            <div className={styles.container}>
                <div className={styles.containerIcone}>
                    <p>Aqui é o carrinho... Adicione Algo</p>
                    <AiOutlineShoppingCart className={styles.iconeCarrinho}></AiOutlineShoppingCart>
                </div>
            </div>
        </>
    )
}