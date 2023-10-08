import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard(props) {


  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.CardItem} key={props.itens.id}>
          <img
            key={props.itens.image}
            src={props.itens.image}
            className={styles.imagemFundo}
          />
          <p key={props.itens.name}>{props.itens.name}</p>
          <div className={styles.ContainerButao}>
            <button key={props.itens.price} className={styles.ButaoComprar}>
              R$ {props.itens.price}
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default ProductCard;
