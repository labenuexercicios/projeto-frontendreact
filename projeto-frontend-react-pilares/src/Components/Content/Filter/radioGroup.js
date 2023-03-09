import React from "react"
import  {useState} from 'react'
import styled from "styled-components"

const export RadioCtn = styled.div`
    display: flex;

    /* Border */
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    height: 2rem;
`

const export RadioLabel = styled.label`

.radio-button-group__label {
    /* Center the content */
    align-items: center;
    display: inline-flex;

    border-right: 1px solid #d1d5db;
    padding: 0.5rem;

    /* For not selected radio */
    background-color: transparent;
    color: #ccc;

    &&:last-cheld{
        border-right-color: transparent;
    }
`


const export RadioInput = styled.input{

        display: none;
  &&selected{}  background-color: #3b82f6;
    color: #fff;

    margin-top: -1px;
    margin-bottom: -1px;


}
]

<RadioCtn>

    <RadioLabel>

        <RadioInput type="radio" value={RadioGroupValue}/>

 
    </RadioLabel>



</RadioCtn>