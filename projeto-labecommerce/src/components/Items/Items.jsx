import { useState } from "react"

export function Items(){
    const [amount, setAmout] = useState("")
    function onChangeAmout(event){
        setAmout(event.target.value)
    }

    return(
        <div className="containerItems">
            <input type="text" name="" id="amount" />
            <p>Name</p>
            <button>Remover</button>
        </div>
    )
}