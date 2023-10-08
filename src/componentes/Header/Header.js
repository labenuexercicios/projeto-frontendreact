import { useState } from "react";
import styles from "./Header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { GiAstronautHelmet } from "react-icons/gi";
import ProductCard from "../ProductCard/ProductCard";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [order, setOrder] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
              onChange={(e) => setNameFilter(e.target.value)}
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

      <div className={styles.Categorias}>
        <select
          className={styles.selecionar}
          value={props.order}
          onChange={(event) => {
            setOrder(event.target.value);
          }}
        >
          <option value="" className={styles.Opcao}>
            Selecione:
          </option>
          <option value="asc" className={styles.Opcao}>
            Menores preços
          </option>
          <option value="desc" className={styles.Opcao}>
            Maiores preços
          </option>
        </select>

        <div>
          {/* imput controlado */}
          <input
            placeholder="Preço mínimo"
            type="number"
            value={props.minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
            }}
            className={styles.precoInformados}
          />
        </div>
        <div>
          <input
            placeholder="Preço máximo"
            type="number"
            value={props.maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
            className={styles.precoInformados}
          />
        </div>
      </div>

      {props.itens

        .filter((itens) => {
          return itens.name.toLowerCase().includes(nameFilter.toLowerCase());
        })

        .filter((itens) => {
          return itens.price >= minPrice || minPrice === "";
        })
        .filter((itens) => {
          return itens.price <= maxPrice || maxPrice === "";
        })

        .sort((a, b) => {
          if (order === "asc") {
            return a.price > b.price ? 1 : -1;
          }
          if (order === "desc") {
            return a.price < b.price ? 1 : -1;
          }
        })
        .map((itens) => {
          return <ProductCard key={itens.name} itens={itens} />;
        })}
    </>
  );
}
export default Header;
