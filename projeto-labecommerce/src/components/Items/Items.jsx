import "./items.css"

export function Items(props){
    return(
        <div className="containerItems">
            <input type="text" id="quantity" value={props.item.quantity} />
            <p>{props.item.name}</p>
            <p> {props.item.value}</p>
            <button onClick={()=>props.removeItem(props.item)}>Remover</button>
       </div>
    )
}