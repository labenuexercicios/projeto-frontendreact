import { useRef,useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'

import { FindImg } from '../Header/styled'
import { currencyBrazil, nameSector, orderArray } from '../../Libs/Lib'
import { Select } from '../../Libs/Select/Select'
import * as s from './AsideStyled'

export default function Aside() {

    let sectorName = null
    const valMin = useRef(null)
    const valMax = useRef(null)

    const {
        filterPrice,
        filterSector,
        filterName,
        totalProducts,
        setFilterPrice
    } = useContext(ProductsContext)

    if (filterSector && filterSector.length) {
        sectorName = nameSector[filterSector] 
    } else {
        sectorName = "Produtos" 
    }
    //BUSCAR
    const filterIsOn = () => {
        const name = nameFind.current
        setFilterName(name.value)
        name.value = ''
    }
    const nameFind = useRef(null)


    const onFind = () => {
        setFilterPrice([valMin.current.value, valMax.current.value])
        valMin.current.value = ''
        valMax.current.value = ''
    }
    const showFilterPrice = () => {
        const valMin = filterPrice[0]
        const valMax = filterPrice[1]
        let textFilter = ""
        if (valMin) {
            if (valMax) {
                textFilter = "de "
            } else {
                textFilter = "a partir "
            }
        }
        textFilter += valMin ? currencyBrazil(+valMin, true) : ""
        textFilter += valMax ? " até " + currencyBrazil(+valMax, true) : ""

        if (valMin + valMax) {
            return <span>
                {textFilter}
            </span>
        }
    }
    return (
        <s.Aside>
            <div>
                <s.AsideTitle>{sectorName} {filterName.length?"( "+filterName+" )":""}</s.AsideTitle>
                <s.AsideAmount>{totalProducts} produtos {showFilterPrice()} </s.AsideAmount>
            </div>
           
            <s.FindPrice>
                <span>Valor:</span>
                <input type="text" name='valMin' ref={valMin}
                    placeholder="mínimo" />
                <input type="text" name='valMax' ref={valMax}
                    placeholder="máximo" />
                <s.BoxArrows>
                    <Select orderArray={orderArray}/>
                </s.BoxArrows> 

                <input id="nameSearch" type="text" name='name' ref={nameFind}
                    placeholder="Buscar" />    

            </s.FindPrice>
        </s.Aside>
    )
}