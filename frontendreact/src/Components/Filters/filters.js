import React from "react";
import { AsideStyleFilters, TituloStyleFilters, InputStyleFilters } from "./FilterStyle";


export const Filters = () => {
    return (
        <AsideStyleFilters>
            <TituloStyleFilters>Filtros</TituloStyleFilters>
            <label>
                Valor mínimo:
                <InputStyleFilters type="text"  />
            </label>
            <label>
                Valor máximo:
                <InputStyleFilters type="text"  />
            </label>
            <label>
                Busca por nome:
                <InputStyleFilters type="text"  />
            </label>
        </AsideStyleFilters>
    )
}

