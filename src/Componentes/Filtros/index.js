import React from "react"
import { LabelFilter, Form, InputFilter, H1Filter, AstroImage } from "./styled"
import Astro from "../Image/Astro2.png"


export function Filtros({minFilter, maxFilter, searchFilter, onChangeSearchFilter, onChangeMinFilter,onChangeMaxFilter}) {


    console.log(searchFilter)

    console.log(maxFilter)

    console.log(minFilter)


    

    
   
    return (
       
        <div>
            
            <Form>
            <H1Filter><h1>Filtros</h1></H1Filter>
            
            <LabelFilter>Filtro Mínimo:</LabelFilter>
            <InputFilter type="number" min="0" onChange={onChangeMinFilter}  value={minFilter}></InputFilter>

            <LabelFilter>Filtro Máximo:</LabelFilter>
            <InputFilter type="number" min="0" onChange={onChangeMaxFilter} value={maxFilter}></InputFilter>

            <LabelFilter>Buscar por nome:</LabelFilter>
            <InputFilter onChange={onChangeSearchFilter} value={searchFilter}></InputFilter>
            </Form>

            
          <AstroImage src={Astro}/>
        </div>
        
        
                )

              

}