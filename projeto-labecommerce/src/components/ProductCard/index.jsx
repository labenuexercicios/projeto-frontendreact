import "./ProductCardStyle.css"

export function ProductCard(props){
    return(
        <article className="productCard">
            <img src={props.card.imageUrl} alt={props.card.name} />
            <h2>{props.card.name}</h2>
            <p>R${props.card.value},00</p>
            <button onClick={()=>props.moreCart(props.card)}>Adicionar no carrinho</button>
        </article>
    )
}