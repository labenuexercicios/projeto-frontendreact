import React from 'react'
import { FilterStyle } from './filterStyle'







export default function Filter() {
    return (
        <>
            <FilterStyle>
                <h2>Filter</h2>
                <div>
                    <label>Valor minímo</label>
                    <input></input>
                </div>
                <div>
                    <label>Valor máximo</label>
                    <input></input>
                </div>
                <div>
                    <label>Busca por nome:</label>
                    <input></input>
                </div>
                
            </FilterStyle>
            <></>
        </>
    
    )
}
