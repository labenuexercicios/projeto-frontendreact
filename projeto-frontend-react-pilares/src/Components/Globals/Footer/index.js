import React from 'react';
import {useState} from'react'
import {FooterCtn, IconsList, IconsAnchor, Footer1 } from './styled'

export function Footer(){

return(
<Footer1>
    <FooterCtn>
      <IconsList>
          <IconsAnchor href="mailto:botechiaeri@gmail.com" ><i class="fa-solid fa-envelope"></i>botechiaeri@gmail.com</IconsAnchor>
      </IconsList>
      <IconsList>
          <IconsAnchor href="https:/www.linkedin.com/in/botechia-erika" ><i class="fa-brands fa-linkedin"></i>/botechia-erika </IconsAnchor>
      </IconsList>
      
  </FooterCtn>
  </Footer1>
)
}

