
function Items (props){
    console.log(props);


    return(
        <div>
            <p>{props.cart}</p>
            <button>Remover</button>
            <p>{props.amount}</p>
            <button>Remover</button>
            
        </div>
    )
}

export default Items