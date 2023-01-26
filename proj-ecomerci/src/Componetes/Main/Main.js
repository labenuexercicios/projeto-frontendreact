import React from "react";
import { CardNave } from "../CardNave/CardNave";
import { MainContainer } from "./styled";
import aeronave from "../../aeronave/aeronave.json";

const Main = (props) => {
    return (
        <MainContainer>
            {aeronave.filter((item) => {
                    return item.nome
                        .toUpperCase()
                        .includes(props.BuscarAeronave.toUpperCase());
                })
                .filter((item) => {
                    return item.modelo
                        .toUpperCase()
                        .includes(props.BuscarModelo.toUpperCase());
                })
                .sort((A, Z) => {
                    if (props.ordenFiltro === "crescente") {
                        return A.nome.localeCompare(Z.nome);
                    } else if (props.ordenFiltro === "decrescente") {
                        return Z.nome.localeCompare(A.nome);
                    } else if (props.ordenFiltro === "ordenado") {
                        return A.id.localeCompare(Z.id);
                    }
                })
                .map((item) => {
                    return (
                        <CardNave
                            key={item.id}
                            item={item}
                            setComprarNave={props.setComprarNave}
                            addNave={props.addNave}
                        />
                    );
                })}
        </MainContainer>
    );
};

export default Main;
