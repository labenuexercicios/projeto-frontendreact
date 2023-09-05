import {removeAccent} from '../Libs/Lib.jsx'

import { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsContext.jsx'

export default function filterItems() {

    const {
        products,
        filterName,
        filterPrice,
        filterSector,
        setFilterName,
        setFilterPrice,
        setFilterSector,
        setTotalProducts
    } = useContext(ProductsContext)
    
    let newData = [...products]

    // filtro para todos produtos
    if (filterSector && filterSector==='all'){
        setFilterName("")
        setFilterPrice([0, 0])
        setFilterSector("")
        return newData
    }
    // filtro por nome 
    if (filterName && filterName.length>0) {
        let text = filterName
        text = removeAccent(text)      
        newData = newData.filter(e => removeAccent(e.name).includes(text))
    } 
    // filtro por setor 
    if (filterSector) {
        newData = newData.filter(e => e.sector === filterSector)
    }
    // filtro por valor 
    if (filterPrice[0]+filterPrice[1] && filterPrice.length>0) {
        let [vMin, vMax] = filterPrice
        vMin = vMin.replace(/[,]/, ".");
        vMax = vMax.replace(/[,]/, ".");
        vMin = +vMin
        vMax = +vMax
        if (vMin + vMax > 0) {
            if (vMax <= 0) {
                vMax = 1000000
            }
            newData = newData.filter(e => e.price >= vMin && e.price <= vMax)
        }
    }
      
    setTotalProducts(newData.length)
    return newData
}

