import React from 'react';
import {useState} from'react'
import {FooterCtn, IconsList, IconsAnchor, Footer1 } from './styled'

export function Footer(){

return(
<Footer1>
    <FooterCtn>
      <IconsList>
          <IconsAnchor href="#" ><i class="fab fa-facebook-f"></i></IconsAnchor>
      </IconsList>
      <IconsList>
          <IconsAnchor href="#" ><i class="fab fa-facebook-f"></i></IconsAnchor>
      </IconsList>
      <IconsList>
          <IconsAnchor href="#" ><i class="fab fa-facebook-f"></i></IconsAnchor>
      </IconsList>
      <IconsList>
          <IconsAnchor href="#" ><i class="fab fa-facebook-f"></i></IconsAnchor>
      </IconsList>

  </FooterCtn>
  </Footer1>
)
}

