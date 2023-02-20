import React from "react";
import logoTipo from "../../imagens/logoJazi.png";
import logoPH from "../../imagens/logoPH.png"
import logoArthur from "../../imagens/logoArthur.png"
import logoKoala from "../../imagens/logoKoala.png"
import { BuscarNave, HeaderContainer } from "./styled";

export const Header = (props) => {
  const onChangeOrdenFiltro = (event) => {
    props.setOrdenFiltro(event.target.value);
  };

  const onChangeBuscarAeronave = (event) => {
    props.setBuscarAeronave(event.target.value);
  };

  const onChangeBuscarModelo = (event) => {
    props.setBuscarModelo(event.target.value);
  };

  return (
    <div>
      <HeaderContainer>
        <div className="logo">
          <img src={logoTipo} />
        </div>
        <BuscarNave>
        <section className="filtros">
          <select onChange={(event) => onChangeOrdenFiltro(event)}>
            <option value="ordenado">Ordenado</option>
            <option value="crescente">Crescente</option>
            <option value="decrecente">Decrecente</option>
          </select>
        </section>
          <input onChange={(event) => onChangeBuscarAeronave(event)} />
          <input onChange={(event) => onChangeBuscarModelo(event)} />
        </BuscarNave>
        <img
          className="logoCarrinho"
          onClick={() => props.setPagina(2)}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTkWdsWqqPkSw29iCgqd22x-7-BMP3cqZrg-Q54MfT6zs3BqySx5JCVqbBSdnbdmOhdc&usqp=CAU"
        />
        <div className="parceiros">
        <a href="https://sable-jewel.surge.sh/"  target="_blank"><img src={logoKoala}/></a>
        <a href=""  target="_blank"><img src="https://i.ibb.co/DDGJg8Z/baixados.png"/></a> 
        <a href=""  target="_blank"><img src={logoPH}/></a>
        <a href="https://e-commer-react-aflap.surge.sh/"  target="_blank"><img src={logoArthur}/></a>
        
        </div>
      </HeaderContainer>
    </div>
  );
};
