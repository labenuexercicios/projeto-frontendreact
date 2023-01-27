import React from "react";
import { ContainerFiltro, EspacoEntreOsItens } from "./style";

export default function AsideFiltro() {
    return(
        <ContainerFiltro>
            <h3>Filtros</h3>

            <EspacoEntreOsItens>
                <label>
                    valor mínimo:
                    <br />
                    <input></input>
                </label> 
            </EspacoEntreOsItens>

            <br />

            <EspacoEntreOsItens>
                <label>
                    valor máximo:
                    <br />
                    <input></input>
                </label>
            </EspacoEntreOsItens>

            <br />

            <EspacoEntreOsItens>
                <label>
                    buscar por nome:
                    <br />
                    <input></input>
                </label>
            </EspacoEntreOsItens>
        </ContainerFiltro>
    )
}