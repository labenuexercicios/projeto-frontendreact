import ProductList from "../ProductCard/ProductCard";
import { DivHome, Select } from "./homeStyle";

export default function Home(){
    return(
        <>
            <Select>
                <option>Ordenar</option>
                <option>Crescente</option>
                <option>Decrescente</option>
            </Select>
            <DivHome>
                <ProductList/>        
                <ProductList/>
                <ProductList/>
                <ProductList/>
                <ProductList/>
                <ProductList/>
                <ProductList/>
                <ProductList/>
                <ProductList/>
            
            </DivHome>
        </>
    )
}