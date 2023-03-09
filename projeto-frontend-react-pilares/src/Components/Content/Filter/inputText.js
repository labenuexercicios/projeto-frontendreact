import React from 'react';
import styled from 'styled-components';
import { dataProducts } from '../../Data/dataProducts';
import  {useState} from 'react';


export const InputField = styled.input`
display: flex;
flex-flow: column wrap;
   width: 100%;
   height: 30px;
   justify-content: center;
   margin:auto;
   border-radius: 5px;
   align-self: flex-start;
   background-color: ${props => props.active ?'greenyellow' : 'lightgray' };

   display: flex;

`
;
export const Label = styled.div`
display: flex;
height: 59px;
justify-content: flex-end;
background: white;
border: 2px solid gray;
border-radius: 15px;



`




export function handleInputChange(e) {

 
return (
        <Label>
         <InputField placeholder='NOME PRODUTO'  setProducts={e}  onChange={(e)=>{handleInputChange(e.target.value)}} />
          </Label>

       )
}
