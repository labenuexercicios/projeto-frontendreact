import React from 'react'
import {NavSection} from './style'
import {useForm} from '../../functions/useForm'

export default function NavSearch(props) {

    const {form, onChange} = useForm({
      nome: '',
      vmin: '',
      vmax: '',
    })


  return(
    <NavSection>
      <h2>Filtros</h2>

      <form>
        <label htmlFor="nome">Nome</label><br />
          <input type='text' 
            name='nome'
            id="nome"
            value={form.nome}
            onChange={onChange}
          />
        <br />
        <label htmlFor="vmin">Valor Mínimo:</label><br />
          <input type='number' placeholder='R$'
            name='vmin'
            id="vmin"
            value={form.vmin}
            onChange={onChange}
          />
        <br />
        <label htmlFor="vmax">Valor Máximo</label><br />
          <input type='number' placeholder='R$'
            name='vmax'
            id="vmax"
            value={form.vmax}
            onChange={onChange}
          />
      </form>

    </NavSection>
  )
}