import { ProductCard } from "../ProductCard/ProductCard"

export function Home(props){
    const result = props.produtos.map(item=>{
        return item
    })
    return(
        <section className="home">
            <div className="containerOrdenar">
                <label htmlFor="ordernar">Ordernar:</label>
                <select>
                    <option value={""}>Crescente</option>
                    <option value={""}>Decrescente</option>
                </select> 
            </div>
            <article className="card">
                    <ProductCard card={result[0]} />
                    <ProductCard card={result[1]} />
                    <ProductCard card={result[2]} />
                    <ProductCard card={result[3]} />
                    <ProductCard card={result[4]} />
                    <ProductCard card={result[5]} />
            </article>
        </section>
    )
}

//Duvida qual input usar na ordernação
// Passar os produtos por props