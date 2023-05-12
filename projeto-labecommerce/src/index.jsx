import { useState } from 'react' // useStage (não irei mexer no momento)

//Link dos Componentes:
import { Filters } from './components/Filters/Filters'
import { Home } from './components/Home/Home'
import { Cart } from './components/Cart/Cart'
import { listaDeProduto } from './assets/ListaProdutos'

export function Index() {
    return(
        <div>
            <header>
                <h1>Labecommerce</h1>
            </header>
            <main>
               <Filters />
               <Home produtos={listaDeProduto}/> 
               <Cart/>
            </main>
            <footer>
                <p>Camila Antunes Copyright © 2023</p>
            </footer>
        </div>
    )
}

// Sempre que é o bigode é o que eu to enviando produtos
/*
   produtos = {dentro daqui é o valor!!!!}
usa-se esse
*/


