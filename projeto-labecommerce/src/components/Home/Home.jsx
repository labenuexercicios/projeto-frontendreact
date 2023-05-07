import { ProductCard } from "../ProductCard/ProductCard"

export function Home(){
    return(
        <section className="home">
            <div className="containerOrdenar">
                <label htmlFor="ordernar">Ordernar:</label>
                <input type="" /> 
            </div>
            <div className="card">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

//Duvida qual input usar na ordernação

// Passar os produtos por props