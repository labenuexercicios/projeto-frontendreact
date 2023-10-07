import styles from "./ProductCard.module.css";
import itens from "./../../itens/itens.json"

function ProductCard(props) {

  return (
    <>
    <div className={styles.container}>
            <div className={styles.CardItem} key={props.itens.id}>
            <img key={itens.image} src={props.itens.image} className={styles.imagemFundo}/>
              <p key={itens.name}>{props.itens.name}</p>
              <div className={styles.ContainerButao}>
                <button key={itens.price} className={styles.ButaoComprar}>R$ {props.itens.price}</button>
              </div>
      </div>
    </div>
    </>
  );
}

export default ProductCard;