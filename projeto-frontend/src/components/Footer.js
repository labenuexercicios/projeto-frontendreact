import React from 'react'
import styled from "styled-components"

export const ContainerFooter = styled.footer`
  background-color:aquamarine;
  height:10vh;
  text-align:center;
`



export default function Footer() {
  return (
    <ContainerFooter>
      <a href='https://github.com/DaviAndreozzi'>GitHub</a>
      </ContainerFooter>
  )
}
