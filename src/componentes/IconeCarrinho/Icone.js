import styles from "./Icones.module.css"
import rocket from "./../../img/rocket.png"


export default function Icones () {

    return (

        <>
            <div className={styles.container}>
                <div className={styles.containerIcone}>
                    <p>Aqui é o carrinho... Adicione Algo</p>
                    <img src={rocket} className={styles.iconeCarrinho}></img>
                </div>
            </div>
        </>
    )
}