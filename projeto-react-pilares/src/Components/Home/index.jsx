import React, { useState } from "react";
import { Cart } from "../Cart";
import { Filter } from "../Filter";
import { Products } from "../Products";


export function Home() {
    const [pagina, setPagina] = useState(false)

    const mudaPagina = () => {
        pagina === 1 ? setPagina(2) : setPagina(1)
    }

    return (
        <div>
        !pagina === 1 ?
        <Filter/>
        <Products/>
        :
        <Cart/>
        </div>
    )
}