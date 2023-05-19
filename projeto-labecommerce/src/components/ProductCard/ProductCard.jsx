 //Temporario

export function ProductCard({card}){
    return(
        <article className="productCard">
            <img src={card.imageUrl} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.value}</p>
        </article>
    )
}