import React from 'react'
import {HeadContainer, HeadContent, Image} from './style'
import img from '../../img/img.jpg'

export default function Header(props) {

  // https://img.ws.mms.shopee.com.br/11aee61a51c8275b568d515dd9420f88
  return(
    <HeadContainer>
      <HeadContent>
        <Image src={img}/>
      </HeadContent>
    </HeadContainer>
  )
}