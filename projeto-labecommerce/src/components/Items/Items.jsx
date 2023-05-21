import { useState } from "react"

export function Items({item, removeItem}){
    
    return(
       <div className="containerItems">
        <div className="firstContainerItems">
            <input type="text" id="amount" value={item.amount} />
            <p>{item.name}</p>
        </div>
        <div className="secondContainerItems">

            <button onClick={()=>removeItem(item)}>Remover</button>
            <p>R${item.value},00</p>
        </div>
        
       </div>
    )
}