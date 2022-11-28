import React, { useState, useEffect } from 'react';
import { CarrinhoAside } from './styles'
import imagemCarrinho from "../../assets/img/cart.svg"
import imagemLixeira from "../../assets/img/lixeira.svg"

export default function Carrinho(props) {
  const { cartItems, onAdd, onRemove, onRemoveTotal } = props;

  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.qtd * c.preco
  }, 0);

  const totalPrice = itemsPrice;

  const countCartItems = cartItems.reduce((a, c) => {
    return a + c.qtd
  }, 0);

  const imagemCart = (imagemCarrinho)

  return (
    <CarrinhoAside>
      <div className="carcesta">
        <h2 className="nome" >Carrinho</h2>
        <div className="carcount">
          <a>
            <img className="imagemCarrinho" src={imagemCart} alt="carrinho" />
            {countCartItems ? (
              <button className="cesta">{countCartItems}</button>
            ) : (
              ''
            )}
          </a>
        </div>
      </div>
      <div className="carrinho">
        {cartItems.length === 0 && <div className="vazio">
          Carrinho vazio
        </div>}
        {cartItems.map((item) => (

          <div key={item.id} className="valor">

            <div className="foguete">
              <p>{item.nome}</p>
            </div>

            <div className="botoes">

              <div>
                <button onClick={() => onRemove(item)} className="botao">
                  -
                </button>
              </div>

              <div>
                <p className="vezes">{item.qtd} x</p>
              </div>

              <div>
                <button onClick={() => onAdd(item)} className="botao">
                  +
                </button>
              </div>

            </div>
            <div className="precolix">
              <div>
                <p className="preco">US$ {item.preco.toFixed(1)} bi </p>
              </div>

              <div className="filho limpar">
                {/* <button onClick={() => onRemoveTotal(item)} className="botao limpar"> */}
                {/* </button> */}
                <img className="liximg" src={imagemLixeira} alt="linkedin" onClick={() => onRemoveTotal(item)} />

              </div>
            </div>

          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div className="valortotal">
              <div>
                <strong>Valor Total</strong>
              </div>
              <div>
                <strong>US$ {totalPrice.toFixed(1)} bi</strong>
              </div>

            </div>
          </>
        )}
      </div>
    </CarrinhoAside>
  );
}
