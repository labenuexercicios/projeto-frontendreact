import products from "../JSON-Data/products.json"

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits:2,
    maximumFractionDigits:2,

})

const newArrayBestOff = [...products]
export const arrayBestOff =  newArrayBestOff.sort((a , b)=>a.offPrice - b.offPrice)
arrayBestOff.splice(4,Number.MAX_VALUE)

const newArrayBesEvaluation = [...products]

export const arrayBestEvaluatiob = newArrayBesEvaluation.sort((a,b)=> a.evaluation- b.evaluation)
arrayBestEvaluatiob.splice(4,Number.MAX_VALUE)

const newArrayMostBougth = [...products]

export const arrayMostBougth = newArrayMostBougth.sort((a,b)=>a.sold-b.sold)
arrayMostBougth.splice(4,Number.MAX_VALUE)

