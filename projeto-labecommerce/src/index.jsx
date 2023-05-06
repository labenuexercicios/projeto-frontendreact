import { useState } from 'react' // useStage (não irei mexer no momento)

//Link dos Componentes:
import { Filters } from './components/Filters/Filters'
import { Home } from './components/Home/Home'
import { Cart } from './components/ShoppingCart/Cart/Cart'

export function Index() {
    return(
        <div>
            <Filters/>
            <Home/>
            <Cart/>
        </div>
    )
}


