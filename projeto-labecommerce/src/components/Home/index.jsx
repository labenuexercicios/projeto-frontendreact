import "./home.css"
import { useState } from "react";
import { ProductCard } from "../ProductCard";

export function Home(props) {
  const [select, setSelect] = useState("");

  const product = props.product.map((item) => {
    return item;
  });

  const onChangeSelect = (event) => {
    setSelect(event.target.value);
  };

  function moreProductInCart(element) {
    const isItemInCart = props.cart.find((item) => item.id === element.id);

    if (isItemInCart) {
      console.log(isItemInCart)
      const updateCart = props.cart.map((item) => {
        if (item.id === element.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      props.setCart(updateCart);
    } else {
      const newProductInCart = [...props.cart, { ...element, quantity: 1 }];
      props.setCart(newProductInCart);
    }

    const totalValueInCart = props.cart.reduce((total,item)=> total + item.quantity,1)
    if (props.cart.length > 1 || totalValueInCart > 1) {
      const updateValue = props.amount.map((item) => {
          return item + element.value
      });
      props.setAmount(updateValue.toFixed(2));
    } else {
      const updateValue = [element.value];
      props.setAmount(updateValue.toFixed(2));
    }
  }

  return (
    <section className="home">
      <div className="containerOrdenar">
        <label htmlFor="ordernar">Ordernar:</label>
        <select value={select} onChange={onChangeSelect}>
          <option>Selecione</option>
          <option value={"Crescent"}>Crescente</option>
          <option value={"Descending"}>Decrescente</option>
        </select>
      </div>
      <article className="card">
        {product
          .filter((item) => {
            if (!isNaN(props.minFilter) && props.minFilter > 0  && item.value > props.minFilter) {
              return item; 
            }else if (!props.minFilter) {
              return item;
            }
          })
          .filter((item) => {
            if (!isNaN(props.maxFilter) && props.maxFilter > 0  && item.value < props.maxFilter) {
              return item;
            } else if (!props.maxFilter) {
              return item;
            }
          })
          .filter((item) => {
            if (props.searchFilter && item.name.toLowerCase().includes(props.searchFilter)) {
              return item;
            } else if (!props.searchFilter) {
              return item;
            }
          })
          .sort((a, b) => {
            if (select === "Crescent") {
              return a.value >= b.value ? 1 : -1;
            } else if (select === "Descending") {
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
