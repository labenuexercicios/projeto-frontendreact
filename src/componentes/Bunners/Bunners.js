import styles from "./Bunners.module.css";

function Bunners({ itensBunners }) {
  return (
    <>
      <div>
        <div className={styles.Container_Burner}>
          {itensBunners.map((itensBunners) => (
            <div key={itensBunners.id} className={styles.Buner}>
              <div className={styles.BunerImg}>
                <img
                  href=""
                  src={itensBunners.image}
                  className={styles.ImagemBunner}
                />
              </div>
              <div className={styles.BunerTexto}>
                <p>{itensBunners.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bunners;
