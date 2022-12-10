import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCarrinhoPage, goToHomePage } from "../../routes/coordinator";
import { NavbarStyled } from "./styled";
import globo from "../../assets/globo.svg";
import foguete from "../../assets/foguete.jpg";
import iconeCarrinho from "../../assets/iconeCarrinho.svg";
import lupa from "../../assets/lupa.svg";
import casinha from "../../assets/casinha.svg";

export default function Navbar() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { carrinho, atualizaFiltroTexto, filtroTexto, quantidade } = context;

  return (
    <NavbarStyled>
      <section className="logo">
        <a onClick={() => goToHomePage(navigate)}>
          <img className="foguete" src={foguete} alt="foguete" />
        </a>
        <h1 className="brinquedolandia">Brinquedolândia</h1>
      </section>

      <div className="input">
        <img src={lupa} alt="lupa buscar" />
        <input
          className="input"
          type="text"
          placeholder="Buscar"
          onChange={atualizaFiltroTexto}
          value={filtroTexto}
        />
      </div>

      <div className="container-button">
        <img
          className="button"
          id="home"
          src={casinha}
          alt="casinha"
          onClick={() => goToHomePage(navigate)}
        />
        <img
          className="button"
          src={iconeCarrinho}
          alt="carrinho"
          onClick={() => goToCarrinhoPage(navigate)}
        />
        {quantidade > 0 && <span>{quantidade}</span>}
        {""}
      </div>
    </NavbarStyled>
  );
}
