import React from "react"
import { LabelFilter, Form, InputFilter, H1Filter, ButtonFilter } from "./styled"


export function Filtros() {


    

    return (
       
        <div>
            
            <Form>
            <H1Filter><h1>Filtros</h1></H1Filter>
            
            <LabelFilter>Filtro Mínimo:</LabelFilter>
            <InputFilter></InputFilter>

            <LabelFilter>Filtro Máximo:</LabelFilter>
            <InputFilter></InputFilter>

            <LabelFilter>Buscar por nome:</LabelFilter>
            <InputFilter></InputFilter>

            <ButtonFilter>Buscar</ButtonFilter>
            
            </Form>

            
               
        </div>
        
                )

}