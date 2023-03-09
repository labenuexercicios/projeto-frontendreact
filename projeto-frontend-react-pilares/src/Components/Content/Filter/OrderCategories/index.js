import React from 'react';
import { InputSelect , InputOption} from './styled';
export function OrderCategories({filterType}){
    
    return(
    <div>
        
    <InputSelect onChange={(e)=>{filterType(e.target.value)}} >
        <InputOption value="0">TIPO</InputOption>
        <InputOption value="1">Camiseta</InputOption>  
        <InputOption value="2">Calça</InputOption>
        <InputOption value="3">Meias</InputOption>
    </InputSelect>
            
    </div>
    );
}

