import React from "react";
import { useState } from "react";
import {
  ContainerHeader,
  ContainerInput,
  ContainerIcons,
  ContainerSidebar,
  Content,
} from "./styled";
import carrinho from "../../assets/icon-carrinho.svg";
import iconX from "../../assets/x.svg";
import remove from "../../assets/remove-icon.svg";
import { priceFormatter } from "../../utils/priceFormatter";

export default function Header (props) {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <ContainerHeader>
      <ContainerInput>
        <label className="Procurar">
          Procurar🔎
          </label>
        <input
          type="text"
          placeholder="Digite um produto..."
          value={props.searchProducts}
          onChange={(event) => {
            props.setSearchProducts(event.target.value);
          }}
        />
      </ContainerInput>

      <ContainerIcons>
     
        <div className="cartQuantity">
          <img
            className="icon-cart"
            onClick={showSiderbar}
            src={carrinho}
            alt=""
          />
          <span className="cartLength">{props.cart.length}</span>
        </div>
        {sidebar && (
          <ContainerSidebar sidebar={sidebar}>
            <img src={iconX} alt="" onClick={closeSidebar} />
            <h3>Carrinho de Compras</h3>

            <Content>
              {props.cart.map((item, index) => {
                return (
                  <div className="boxProducts" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="boxInfos">
                      <p>{item.name}</p>
                      <div className="cardInfosQuantity">
                        <span
                          className="defineQuantity"
                          onClick={() => props.removeQuantity(index)}
                        >
                          -
                        </span>
                        <span className="itemQuantity">{item.quantity}</span>
                        <span
                          className="defineQuantity"
                          onClick={() => props.addQuantity(index)}
                        >
                  
                        </span>
                      </div>
                    </div>
                    <div className="boxRemoveEPrice">
                      <div className="remove">
                        <img
                          className="removeItem"
                          src={remove}
                          onClick={() => props.removeItem(index)}
                          alt="ícone de lixeira"
                        />
                      </div>
                      <p className="price">
                        {priceFormatter.format(item.price)}
                      </p>
                    </div>
                  </div>
                );
              })}
              <h2>
                Total do carrinho:{" "}
                {priceFormatter.format(props.totalOfProducts)}
              </h2>
            </Content>
          </ContainerSidebar>
        )}
      </ContainerIcons>
    </ContainerHeader>
  );
}
