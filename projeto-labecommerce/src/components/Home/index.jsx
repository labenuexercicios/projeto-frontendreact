import { useState } from "react";
import { ProductCard } from "../ProductCard";

export function Home(props) {
  const [select, setSelect] = useState("");

  const product = props.produtos.map((item) => {
    return item;
  });

  const onChangeSelect = (event) => {
    setSelect(event.target.value);
  };

  function moreProductInCart(elemento) {
    const isItemInCart = props.cart.find((item) => item.id === elemento.id);

    if (isItemInCart) {
        const updateCart = props.cart.map((item) => {
          if (item.id === elemento.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      props.setCart(updateCart);
    }else {
        const newProductInCart = [...props.cart, { ...elemento, quantity: 1 }];
        props.setCart(newProductInCart);
    }

  }



  return (
    <section className="home">
      <div className="containerOrdenar">
        <label htmlFor="ordernar">Ordernar:</label>
        <select value={select} onChange={onChangeSelect}>
          <option>Selecione</option>
          <option value={"Crescente"}>Crescente</option>
          <option value={"Decrescente"}>Decrescente</option>
        </select>
      </div>
      <article className="card">
        {product
          .filter((item) => {
            if (
              props.minFilter &&
              !isNaN(props.minFilter) &&
              item.value <= props.minFilter
            ) {
              return item; // O PROBLEMA É A LOGICA DAQUI !!!!!!
            } else if (!props.minFilter) {
              return item;
            }
          })
          .filter((item) => {
            if (
              props.maxFilter &&
              !isNaN(props.maxFilter) &&
              item.value >= props.maxFilter
            ) {
              return item;
            } else if (!props.maxFilter) {
              return item;
            }
          })
          .filter((item) => {
            if (props.searchFilter && item.name.includes(props.searchFilter)) {
              return item;
            } else if (!props.searchFilter) {
              return item;
            }
          })
          .sort((a, b) => {
            //OK
            if (select === "Crescente") {
              return a.value >= b.value ? 1 : -1;
            } else if (select === "Decrescente") {
              return a.value >= b.value ? -1 : 1;
            }
          })
          .map((item, index) => {
            return (
              <ProductCard
                key={index}
                card={item}
                moreCart={moreProductInCart}
              />
            );
          })}
      </article>
    </section>
  );
}

//Duvida qual input usar na ordernação
// Passar os produtos por props
