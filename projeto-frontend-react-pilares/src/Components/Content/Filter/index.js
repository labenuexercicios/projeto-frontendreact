import React from "react"
import {SearchCtn, SearchList, SearchItem, SearchImg , SearchH2, AddCart, SeeDetails} from "./styled"



export function Filter({product}){


 return(

<SearchCtn>
    <SearchList>
    <SearchItem>
        <SearchH2>{product.name}</SearchH2>
        <SearchImg>{product.img}</SearchImg>
        <AddCart>ADD +1</AddCart>
        <SeeDetails>ADD +1</SeeDetails>
    </SearchItem>
 
</SearchList>
</SearchCtn>



)
}
