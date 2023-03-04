import React from 'react';
import { InputSelect , InputOption} from './styled';
import { useState, useEffect } from 'react';
export function OrderCategories(){
    return(
    <div>
        
                      <InputSelect>
        <InputOption>TIPO</InputOption>
        <InputOption>Calça</InputOption>
        <InputOption>Camiseta</InputOption>
        <InputOption>Meias</InputOption>
        </InputSelect>
            
    </div>
    );
}

