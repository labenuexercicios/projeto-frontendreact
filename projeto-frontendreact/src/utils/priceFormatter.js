export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

  //para usar real substituir:
  // --> o primeiro parametro por'pt-BR'
  // --> o segundo parametro - prop -> currency: 'BRL'