import ProductCard from "../ProductCard/ProductCard";
import { DivHome, Select, DivSelect, DivTotal, H3 } from "./homeStyle";

export default function Home({Products, search, order, setOrder, addCart,setAddCart, addToCart, minValue, maxValue}){

    const handleOrder = (e) =>{
        setOrder(e.target.value)
    };
    console.log(handleOrder)

    return(
        <DivTotal>
            <DivSelect>
                <H3>Quantidade de produtos: {Products.length}</H3>
                <Select 
                onChange={handleOrder}
                value={order}>
                    <option value="">Ordenar por nome</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </Select>
                <Select 
                onChange={handleOrder}
                value={order}>
                    <option value="">Ordenar por preço</option>
                    <option value="maior">Maior preço</option>
                    <option value="menor">Menor preço</option>
                </Select>
            </DivSelect>
            <DivHome>

                {Products.filter((product)=>{
                    return product.name.toLowerCase().includes(search.toLowerCase())
                
                }).filter((product) => 
                    product.value > Number(minValue)
                ).filter((product) =>
                    product.value < Number(maxValue)
                ).sort((a,b)=> order === "" || order === "crescente" &&
                a.name > b.name ? 1 : -1                    
                
                ).sort((a,b) => order === "decrescente" && 
                a.name > b.name ? -1 : 1
                
                ).sort((a,b) => {
                    if(order === "maior"){
                        return b.value - a.value
                    }
                    if(order === "menor"){
                        return a.value - b.value
                    }
                }
                
                ).map((product)=>{
                    return(
                        <ProductCard
                        key={Products.id}
                        product={product}
                        addCart={addCart}
                        setAddCart={setAddCart}
                        addToCart={addToCart}
                        />
                    )
                })
                }
            </DivHome>
        </DivTotal>
    )
}