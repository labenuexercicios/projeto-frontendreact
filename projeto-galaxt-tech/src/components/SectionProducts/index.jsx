import React from "react";
import { Cards } from "./styled";
import { priceFormatter } from "../../utils/priceFormatter";
import svgCart from "../../assets/shopping-cart.svg"

export function SectionProducts(props) {

  return (
    <>
      <Cards>
        <div className="cardContainer">
        </div>  
          <div className="cardRadius">
          <img
            className="cardImg"
            src={props.product.image}
            alt={props.product.name}
          />
          <div className="boxInfo">
            <div className="cardInfo">
              <p className="textTitle">{props.product.name}</p>
              <p className="textBody">{props.product.description}</p>
            </div>
            <div className="cardFooter">
              <span className="textTitle">{priceFormatter.format(props.product.price)}</span>
              <div className="cardButton" onClick={() => props.addToCart(props.product)}>
                <img className="svgIcon" src={svgCart} alt="ícone de carrinho"/>
                <span className="textAddToCart">Adicionar ao carrinho</span>
              </div>
            </div>
          </div>
        </div>
      </Cards>
    </>
  );
}
