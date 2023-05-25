import {  useState } from "react";
import CardProduto from "../CardProduto/CardProduto";
import "./Home.css";

function Home(props) {
  const { results, amount, setAmount, cart, setCart } = props;

  const calcularValorTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };


  const [ordination, setOrdination] = useState();

  const ordernar = (event) => {
    setOrdination(event.target.value);

    if (event.target.value === "asc") {
      results.sort((a, b) => a.price - b.price);
    } else {
      results.sort((a, b) => b.price - a.price);
    }
  };

  const handleAddToCart = (product) => {
    const existeProduto = cart.find((item) => item.title === product.title);

    if (existeProduto) {
      existeProduto.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }

    const novoValorTotal = calcularValorTotal(cart);
    setAmount(novoValorTotal);
  };



  const productList = results.map((product) => {
    return (
      <CardProduto
        key={product.title}
        image={product.image}
        title={product.title}
        price={product.price}
        handleAddToCart={handleAddToCart}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
      />
    );
  });

  return (
    <div>
      <div className="ordenacao">
        <p>Quantidade de produto: {results.length}</p>
        <label>Ordenação:</label>
        <select onChange={ordernar}>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
      </div>
      <div className="produtos">{productList}</div>
    </div>
  );
}

export default Home;
