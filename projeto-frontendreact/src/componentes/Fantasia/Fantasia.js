import "./Fantasia.css";

const Fantasia = (props) => {
  return (
    <div>
      <ul className="lista-produtos">
        <li>Fantasia: {props.nome}</li>
        <li>R${props.valor}</li>
        <li>
          <img src={props.img} alt="fantasia 1"></img>
        </li>
        <button onClick={() => props.adicionarAoCarrinho(props.produto)}>
          adicionar
        </button>
      </ul>
    </div>
  );
};

export default Fantasia;
