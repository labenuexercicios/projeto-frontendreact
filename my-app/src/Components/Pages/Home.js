import React from 'react'
import "./Home.css";


const Home = ({product, addItem}) => {
  return (
    <div>
        <section>
            <div className="card">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} className="imgCard" />
                <p>{product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
                <p>{product.description}</p>
                <button onClick={() => addItem(product)} className="buttonCard"><b>Comprar</b></button>
            </div>
        </section>
    </div>
  )
}

export default Home;
