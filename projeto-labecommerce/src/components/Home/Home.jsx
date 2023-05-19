import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home(props) {
  const [select, setSelect] = useState("");

  function onChangeSelect(event) {
    setSelect(event.target.value);
  }

  const result = props.produtos.map((item) => {
    return item;
  });


  return (
    <section className="home">
      <div className="containerOrdenar">
        <label htmlFor="ordernar">Ordernar:</label>
        <select value={select} onChange={onChangeSelect}>
            <option>Crescente</option>
            <option>Decrescente</option>
        </select>
      </div>
      <article className="card">
        {
        result.map((item, index) => {
            console.log(item);
            return (
                <ProductCard key={index} card={item}/>
            );
        })
        }
      </article>
    </section>
  );
}

//Duvida qual input usar na ordernação
// Passar os produtos por props
