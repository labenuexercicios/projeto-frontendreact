import React from 'react'
import { HomeStyles } from './HomeStyle'

export default function Home() {
  return (
    <HomeStyles>
      <p>Quantidade de produtos:</p>
      <div>
      <p>Ordenação:</p>
      <select><option>Crescente</option><option>Decrescente</option></select>
      </div>
    </HomeStyles>

  )
}
