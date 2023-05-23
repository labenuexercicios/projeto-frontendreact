import React from "react";
import { ContainerFilters } from "./styled";

export function Filters(props) {
  return (
    <>
    <ContainerFilters>
      <span className="filter-price">
        <input
          placeholder="Preço mínimo"
          type="number"
          value={props.minimumPrice}
          onChange={(event) => {
            props.setMinimumPrice(event.target.value);
          }}
        />
        <input
          placeholder="Preço maxímo"
          type="number"
          value={props.maximumPrice}
          onChange={(event) => {
            props.setMaximumPrice(event.target.value);
          }}
        />
      </span>

      <span className="sorting">
        <label for="sorting">Ordenar por: </label>
          <select
            name="sorting"
            value={props.sorting}
            onChange={(event) => {
              props.setSorting(event.target.value);
            }}
          >
            <option selected value={""}>Ordenar</option>
            <option value={"name"}>Nome</option>
            <option value={"price"}>Preço</option>
          </select>

          <select
            value={props.order}
            onChange={(event) => {
              props.setOrder(event.target.value);
            }}
          >
            <option value={"asc"}>Crescente</option>
            <option value={"desc"}>Decrescente</option>
          </select>

          <label for="color">Escolha a cor do produto:</label>
          <select
            value={props.color}
            onChange={(event) => {
              props.setColor(event.target.value);
            }}
          >
            <option selected value={""}>Escolha a cor</option>
            <option value={"Azul"}>Azul</option>
            <option value={"Branco"}>Branco</option>
            <option value={"Laranja"}>Laranja</option>
            <option value={"Cinza"}>Cinza</option>
            <option value={"Preto"}>Preto</option>
            <option value={"Rosa"}>Rosa</option>
            <option value={"Vermelho"}>Vermelho</option>
            <option value={"Verde"}>Verde</option>
          </select>

          <label for="category">Escolha a categoria:</label>
          <select
            value={props.category}
            onChange={(event) => {
              props.setCategory(event.target.value);
            }}
          >
            <option selected value={""}>Categoria</option>
            <option value={"Astronauta"}>Astronauta</option>
            <option value={"Alien"}>Alien</option>
            <option value={"Animais"}>Animais</option>
            <option value={"Robôs"}>Robôs</option>
            <option value={"Naves"}>Naves</option>
          </select>
      </span>
    </ContainerFilters>
    </>
  );
}
