import React, {useState} from 'react';
import styled from 'styled-components';



export const CheckboxContainer = styled.div`
display: flex;
flex-flow: column wrap;
   width: 200px;
   height: 30px;
   justify-content: center;
   align-itens: space-evenl;
   margin:auto;
   border-radius: 5px;
   align-self: flex-start;
   background-color: ${props => props.checked ?'greenyellow' : 'lightgray' };

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




export function Checkbox(checkValue) {

    const [checked, setChecked] = useState(false);
    
    function handleCheckboxChange(){
       if(!checked){
        setChecked(!checked);
        }
    }

console.log(setChecked)       
return (
<Label>
         <CheckboxContainer checked={checked} onClick={handleCheckboxChange} value={checkValue}>
             <input type="checkbox" />
             <span>HELLO</span>
         </CheckboxContainer>

 </Label>

       )
}
