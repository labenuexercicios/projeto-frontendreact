import React, { useState } from 'react'
import searching from '../../assets/icons/searching.svg'
import { Cart } from '../Cart/Cart'
import { MainContent } from '../MainContent/MainContent'
import { Price, Search, ImgIcon, Main} from './style'

export const Filters = (props) => {

  function handleMinValue(e){   
    props.setMinValue(e.target.value)
  }

  function handleMaxValue(e){   
    props.setMaxValue(e.target.value)
  }

  return (
      <aside>
          <Price>
              <Search value={props.minValue} onChange={handleMinValue} placeholder='Valor Mínimo' type={'number'}/>
              
              <ImgIcon><img src={searching}/></ImgIcon>
          </Price>

          <Price>
              <Search value={props.maxValue} onChange={handleMaxValue} placeholder='Valor Máximo'/>
              
              <ImgIcon><img src={searching}/></ImgIcon>
          </Price>
      </aside>
  )
}