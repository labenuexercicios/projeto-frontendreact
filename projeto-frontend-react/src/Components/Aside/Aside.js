import React from "react";
import { Filtros, Titulo, Label, Select, Input, Botão } from "./Style";

export default function Aside (props) {

    return (
        <Filtros>
            <Titulo>Filtros</Titulo>
            <Label>Ordenação</Label>
            <Select onChange={(event) => {props.handleOrdenacao(event)}}>
                <option value={1}>Crescente</option>
                <option value={2}>Decrescente</option>
            </Select>
            <Label>Valor Mínimo</Label>
            <Input value={props.minimo} type={"number"} onChange={(event) => props.handleMinimo(event)}/>
            <Label>Valor Máximo</Label>
            <Input value={props.maximo} type={"number"} onChange={(event) => props.handleMaximo(event)}/>
            <Label>Busca por Nome:</Label>
            <Input value={props.nome} type={"text"} onChange={(event) => props.handleNomeProduto(event)}/>
            <Botão onClick={() => props.setFiltro(true)}>Filtrar</Botão>
            <Botão onClick={() => props.setFiltro(false)}>Limpar Filtro</Botão>
        </Filtros>
    )
}
