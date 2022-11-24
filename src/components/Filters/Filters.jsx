import React, { useState } from 'react'
import searching from '../../assets/icons/searching.svg'
import { Price, Search, PlaceHolder, ImgIcon} from './style'

export const Filters = () => {

  const [texto, setTexto] = useState('Valor Mínimo')
  const [value, setValue] = useState('')

  function hide (){
    setTexto('')
  }

  function handleValue(e){   
    setValue(e.target.value)
  }

  return (
    <aside>
        <Price>
            <Search value={value} onChange={handleValue} onClick={hide} placeholder='Valor Mínimo'/>
            
            <ImgIcon><img src={searching}/></ImgIcon>
        </Price>

        <Price>
            <Search value={value} onChange={handleValue} onClick={hide} placeholder='Valor Máximo'/>
            
            <ImgIcon><img src={searching}/></ImgIcon>
        </Price>

    </aside>
  )
}