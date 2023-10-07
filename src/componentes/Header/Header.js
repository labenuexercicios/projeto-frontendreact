import { useState } from "react";
import styles from "./Header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import {GiAstronautHelmet} from "react-icons/gi"

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.Container}>
          <GiAstronautHelmet className={styles.Logo} />
        </div>
        <div className={styles.pesquisar}>
          <button type="submit" className={styles.lupa}>
            <BiSearchAlt className={styles.iconeLupa} />
          </button>

          <form className={styles.pesquisarForm}>
            <input
              type="text"
              placeholder="Pesquisar"
              value={props.nameFilter}
              onChange={(e) => props.setNameFilter(e.target.value)}
            />
          </form>
        </div>

      </div>
      <nav
        className={`${styles.menuSanduwich} ${showMenu ? styles.show : ""}`}
        onClick={toggleMenu}
      >
        <a href="" target="_blank" className={styles.LinksSandWich}>
          Home
        </a>
        <a href="" target="_blank" className={styles.LinksSandWich}>
          Carrinho
        </a>
        <a
          href="https://www.instagram.com/gsmartins216/"
          target="_blank"
          className={styles.LinksSandWich}
        >
          Suporte
        </a>
        <a href="" target="_blank" className={styles.LinksSandWich}>
          Configurações
        </a>
      </nav>

      <div className={styles.MenuButton} onClick={toggleMenu}>
        <span className={styles.Linha}></span>
        <span className={styles.Linha}></span>
        <span className={styles.Linha}></span>
      </div>
    </>
  );
}
export default Header;
