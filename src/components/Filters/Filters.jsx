import React, { useState } from 'react'
import searching from '../../assets/icons/searching.svg'
import { Cart } from '../Cart/Cart'
import { MainContent } from '../MainContent/MainContent'
import { Price, Search, ImgIcon, Main} from './style'

export const Filters = () => {

  const [minValue, setMinValue] = useState('')

  function handleMinValue(e){   
    setMinValue(e.target.value)
  }

  return (
    <Main>
      <aside>
          <Price>
              <Search value={minValue} onChange={handleMinValue} placeholder='Valor Mínimo'/>
              
              <ImgIcon><img src={searching}/></ImgIcon>
          </Price>

          <Price>
              <Search value={minValue} onChange={handleMinValue} placeholder='Valor Máximo'/>
              
              <ImgIcon><img src={searching}/></ImgIcon>
          </Price>
      </aside>

      <MainContent/>

      <Cart/>
      
    </Main>
  )
}