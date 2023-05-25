import "./CardProduto.css";

function CardProduto(props) {
  const { image, title, price, handleAddToCart } = props;

  const handleAddClick = () => {
    handleAddToCart({ image, title, price, quantity: 1 });
  };

  return (
    <div className="card-produto">
      <img src={image} alt={title} />
      <div className="card-texto">
        <h2>{title}</h2>
        <p>{price}</p>
        <button onClick={handleAddClick}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default CardProduto;
