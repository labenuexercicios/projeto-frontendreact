export const OrderProducts = ({ setSelect, setOrder, quantityProducts }) => {
  return (
    <>
      <span>
        {Object.values(quantityProducts).length} resultados encontrados
      </span>
      <div>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value={"title"}>Titulo</option>
          <option value={"price"}>Preco</option>
        </select>
        <select onChange={(e) => setOrder(e.target.value)}>
          <option value={"crescente"}> Crescente</option>
          <option value={"decrescente"}> Decrescente</option>
        </select>
      </div>
    </>
  );
};
