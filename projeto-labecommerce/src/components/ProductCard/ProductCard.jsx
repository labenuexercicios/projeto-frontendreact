 //Temporario

export function ProductCard({card}){
    console.log()
    return(
        <article className="productCard">
            <img src={card.imageUrl} alt="Foto do produto" />
            <h2>{card.name}</h2>
            <p>{card.value}</p>
        </article>
    )
}