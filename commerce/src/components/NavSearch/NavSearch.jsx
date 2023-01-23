import React from 'react'
import {NavSection} from './style'

export default function NavSearch(props) {

  return(
    <NavSection>
      <h2>Filtros</h2>

      <form>
        <label htmlFor="nome">Nome</label><br />
          <input type='text' 
            name='nome'
            id="nome"
            value={props.nome}
            onChange={props.handleName}
          />
        <br />
        <label htmlFor="vmin">Valor Mínimo:</label><br />
          <input type='number' placeholder='R$'
            name='vmin'
            id="vmin"
            value={props.vmin}
            onChange={props.handleVmin}
          />
        <br />
        <label htmlFor="vmax">Valor Máximo</label><br />
          <input type='number' placeholder='R$'
            name='vmax'
            id="vmax"
            value={props.vmax}
            onChange={props.handleVmax}
          />
        <br />
        <label htmlFor="order">Ordenar</label><br />
          <select onChange={props.handleOrder}>
            <option value="C">Crescente</option>
            <option value="D">Decrescente</option>
          </select>
      </form>

    </NavSection>
  )
}