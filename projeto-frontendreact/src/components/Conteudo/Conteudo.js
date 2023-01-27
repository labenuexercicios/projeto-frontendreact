import React from "react";
import AsideFiltro from "./AsideFiltro/AsideFiltro";
import Main from "./Main/Main"
import AsideCarrinho from "./AsideCarrinho/AsideCarrinho";
import { ConteudoDaPagina } from "./style";

export default function Conteudo() {
    return(
        <ConteudoDaPagina>
            <AsideFiltro />
            <Main />
            <AsideCarrinho />
        </ConteudoDaPagina>
    )
}