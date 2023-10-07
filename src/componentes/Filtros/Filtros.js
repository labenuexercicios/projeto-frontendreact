import styles from "./Filtros.module.css";

function Filter(props) {
  return (
    <>
      <div className={styles.Categorias}>
        <select
          className={styles.selecionar}
          value={props.order}
          onChange={(event) => {
            props.setOrder(event.target.value);
          }}
        >
          <option value="" className={styles.Opcao}>Selecione:</option>
          <option value="asc" className={styles.Opcao}>Menores preços</option>
          <option value="desc" className={styles.Opcao}>Maiores preços</option>
        </select>


        <div>
            {/* imput controlado */}
            <input placeholder="Preço mínimo"
              type="number"
              value={props.minPrice}
              onChange={(e) => { props.setMinPrice(e.target.value) }}
              className={styles.precoInformados} />
          </div>
          <div>
            <input placeholder="Preço máximo"
              type="number"
              value={props.maxPrice}
              onChange={(e) => { props.setMaxPrice(e.target.value) }}
              className={styles.precoInformados} />
          </div>
      </div>
    </>
  );
}

export default Filter;
