import React from "react";
import {Cabecalho, ListaHeader, EspacoEntreLi} from "./style"

export default function Header() {
    return(
        <Cabecalho>
            <h1>loja</h1>
            <nav>
                <ListaHeader >
                    <EspacoEntreLi>Home</EspacoEntreLi>
                    <EspacoEntreLi>Sobre</EspacoEntreLi>
                    <EspacoEntreLi>Contato</EspacoEntreLi>
                </ListaHeader>
            </nav>
        </Cabecalho>
    )
}