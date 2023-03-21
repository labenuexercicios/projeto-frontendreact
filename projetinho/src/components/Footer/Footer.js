import React from "react";
import { FooterContainer } from "./style";
import dinheiro from "../../imagem/dinheiro.png";
import linkedin from "../../imagem/linkedin.png";
import github from "../../imagem/github.png";
import cartao from "../../imagem/cartao.png";
import arthur from "../../imagem/logoArthur";
import jaziel from "../../imagem/logotipo_Jaziel.png";
import mel from "../../imagem/logotipo_Mel.png";
import ph from "../../imagem/logotipo_PH.png"

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <div className="blocoParceiro">
          <h3>Parceiros</h3>
          <a href="https://e-commer-react-aflap.surge.sh/">
          <img src={arthur} />
          </a>
          <a>
          <img className="jazi"  src={jaziel}/>
          </a>
          <a>
          <img src={mel}/>
          </a>
          <a>
          <img src={ph}/>
          </a>

        </div>

        <div className="RedesSociais">
          <h3>Redes Sociais</h3>
          <a href="https://www.linkedin.com/in/camila-franco-91aa29204/">
            <img src={linkedin} />
          </a>
          <a href="https://github.com/CamilaKFranco">
            <img src={github} />
          </a>
        </div>
        

        <div className="Pagamentosicone">
          <h3>Pagamentos</h3>
          <img src={cartao} />
          <img src={dinheiro} />
          <img src="data:image/png;base64,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" />
        </div>
      </FooterContainer>
    </div>
  );
}
