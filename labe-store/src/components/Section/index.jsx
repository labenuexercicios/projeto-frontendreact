import React from 'react'
import { ContainerDIv, DivSectionProds, } from './styled'

const Section = ({ prodShopping }) => {
    return (
        <ContainerDIv>
            {prodShopping.map((item, index) => {
                return (
                    <DivSectionProds key={index}>
                        <h3>{item.name}</h3>

                    </DivSectionProds>
                )
            })}
        </ContainerDIv>
    )
}

export default Section
