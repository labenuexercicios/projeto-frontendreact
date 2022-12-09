import { Card } from "./Cards/Cards.js"
import { Filter } from "./Filter/Filter.js"
import {CardContainer, FilterContainer, Main, MainBody, MainHeader} from "./Styled.js"
import listProducts from "./List-products.json"
import { useState } from "react"

export const Products = (props) => {
    
const [minPrice, setMinPrice] = useState(-Infinity)
const [maxPrice, setMaxPrice] = useState(Infinity)
const [categoryFilms, setCategoryFilms] = useState("")
const [categorySeries, setCategorySeries] = useState("")
const [categoryOthers, setCategoryOthers] = useState("")
const [order, setOrder] = useState("")

    return (
        <Main>
            <MainHeader>
            </MainHeader>
            <MainBody>
                <FilterContainer>
                    <Filter
                    setMinPrice = {setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setCategoryFilms={setCategoryFilms}
                    setCategorySeries={setCategorySeries}
                    setCategoryOthers = {setCategoryOthers}
                    setOrder =  {setOrder}
                    />
                </FilterContainer>
                <CardContainer>
                    {listProducts
                    .filter((products)=> {
                        return products.name.toLocaleLowerCase().includes(props.querry.toLocaleLowerCase()) || products.show.toLocaleLowerCase().includes(props.querry.toLocaleLowerCase())
                    })
                    
                    .filter((products)=> { 

                        if (categoryFilms === true && categorySeries === true && categoryOthers === true){
                            return (products.category.includes("Filmes") || products.category.includes("Séries") || products.category.includes("Outro"))
                        }

                        if (categoryFilms === true && categorySeries === true){
                            return (products.category.includes("Filmes") ||  products.category.includes("Séries"))
                        }

                        if (categoryFilms === true && categoryOthers === true){
                            return (products.category.includes("Filmes") ||  products.category.includes("Outro"))
                        }

                        if (categorySeries === true && categoryOthers === true){
                            return (products.category.includes("Séries") ||  products.category.includes("Outro"))
                        }
                       
                        if (categoryFilms === true) {
                         return products.category.includes("Filmes")
                        }
                        
                        if (categorySeries === true) {
                        return products.category.includes("Séries")
                         }

                        if (categoryOthers === true) {
                        return products.category.includes("Outro")
                        } else {return products}})
                                  

                    .filter((products)=> {
                        return (products.price >= minPrice && products.price <= maxPrice) || (minPrice && maxPrice === "")} )
                    
                    .sort((actual, next)=> { 
                        switch (order){
                            case "A - Z":
                            return actual.name.localeCompare(next.name)
                            
                            case "Min - Máx":
                            return actual.price - next.price

                            case "Máx - Min":
                            return next.price - actual.price
                                
                            default: return actual
                        }
                       
                    })
                    .map((products)=>{
                        return (
                            <Card key = {products.id}
                            product= {products}
                            addToCart = {props.addToCart}/>
                        )
                    })}
                    
                </CardContainer>
            </MainBody>
        </Main>
)
}