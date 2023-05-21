import { useState } from "react"

export function Items({item, removeItem}){
    
    return(
        <div className="containerItems">
            <input type="text" id="amount" value={item.amount} />
            <p>{item.name}</p>
            <p> {item.value}</p>
            <button onClick={()=>removeItem(item)}>Remover</button>
        </div>
    )
}