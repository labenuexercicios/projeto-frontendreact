import { useState } from 'react' // useStage (não irei mexer no momento)

//Link dos Componentes:
import { Filters } from './components/Filters/Filters'
import { Home } from './components/Home/Home'
import { Cart } from './components/Cart/Cart'

//Coloca a lista de produtos!!!

export function Index() {
    return(
        <div>
            <header>
                <h1>Labecommerce</h1>
            </header>
            <main>
               <Filters/>
               <Home/>
               <Cart/>
            </main>
            <footer>
                <p>Camila Antunes Copyright © 2023</p>
            </footer>
        </div>
    )
}


