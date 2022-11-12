import { MainContainer, NavContainer, ListaContainer } from './Main.styled.'
import Filter from '../Filter-Side/Filter'
import Card from '../Card-Products/Card'

import { useState } from 'react'
import { changeStringSearchStandard } from '../../uteis/searchStringStandard'

function Main(props) {
    const { 
        inputName,
        products,
        currCart,
        addToCart,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart
    } = props



    const handleOnchagePriceMin = (e) => {
        if (!priceMax - priceMin <= 10) {
            setPriceMin(e.target.value)
        }
    }
    const handleOnchagePriceMax = (e) => {
        if (!priceMax - priceMin <= 10) {
            setPriceMax(e.target.value)
        }
    }

    const handleOnChangeCategory = (e) => {

        const valueCheckbox = e.target.value;
        const newCategory = [...categories]
        if (e.target.checked) {
            if (!newCategory.includes(valueCheckbox)) {
                newCategory.push(valueCheckbox)
            }

        } else {
            if (newCategory.includes(valueCheckbox)) {
                const indexCategory = newCategory.indexOf(valueCheckbox)
                console.log(indexCategory);
                newCategory.splice(indexCategory, 1)
            }
        }
        setCategories(newCategory)
    }

    const filterByCategory = (prod) => {
        let bool = false
        for (let a of categories) {
            if (prod.categories.includes(a))
                bool = true
        }

    }









    const arrayPriceDiscont = products.map((prod) => {

        const priceDiscont = prod.price * (1 - (prod.offPrice / 100))
        return { ...prod, priceDiscont: priceDiscont }
    })
    const sortMaxMin = arrayPriceDiscont.sort((a, b) => a.priceDiscont - b.priceDiscont)
    const maxPriceProduct = (sortMaxMin[sortMaxMin.length - 1].priceDiscont).toFixed(0)

    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(maxPriceProduct)
    const [categories, setCategories] = useState(["Livros", "Brinquedos", "Roupas"])
    const [select, setSelect] = useState("Destaque")


    const handleOnChangeSelect = (e) => {
        setSelect(e.target.value)
        handleSwicthCase(e.target.value)

    }
    const handleSwicthCase = (selected) =>{
        switch (selected) {
            case "Destaque":
                return arrayPriceDiscont.sort((a, b) => a.sold - b.sold)

            case "Crescente":
                return arrayPriceDiscont.sort((a, b) => a.name < b.name ? -1 : 1)
            case "Decrescente":
                return arrayPriceDiscont.sort((a, b) => a.name > b.name ? -1 : 1)
            case "MaiorPreco":
                return arrayPriceDiscont.sort((a, b) => b.priceDiscont - a.priceDiscont)
            case "MenorPreco":
                return arrayPriceDiscont.sort((a, b) => a.priceDiscont - b.priceDiscont)
            case "MaiorAvaliacao":
                return arrayPriceDiscont.sort((a, b) => a.evaluation - b.evaluation)
            case "MaiorDesconto":
                return arrayPriceDiscont.sort((a, b) => b.offPrice - a.offPrice)
                deafalt:
                return sortMaxMin


        }

    }

 




    return (
        <MainContainer>
            <nav>

                    <label>Ordenar por:</label>
                    <select value={select} onChange={handleOnChangeSelect}>
                        <option  value="Destaque" >Destaque</option>
                        <option value="Crescente" >Crescente</option>
                        <option value="Decrescente" >Decrescente</option>
                        <option value="MaiorPreco" >Maior Preço</option>
                        <option value="MenorPreco" >Menor Preço</option>
                        <option value="MediaAvaliacao" >Media de Avaliação</option>
                        <option value="MaiorDesconto" >Maior Desconto</option>
                    </select>
            </nav>

            <Filter maxPriceProduct={maxPriceProduct}
                priceMin={priceMin}
                priceMax={priceMax}
                handleOnchagePriceMin={handleOnchagePriceMin}
                handleOnchagePriceMax={handleOnchagePriceMax}
                handleOnChangeCategory={handleOnChangeCategory}
            />

            <section className='filter-side'>
                {handleSwicthCase(select)
                .filter((product) =>changeStringSearchStandard(product.name).includes(inputName))
                    .filter((product) => product.priceDiscont >= priceMin)
                    .filter((product) => product.priceDiscont <= priceMax)
                    .filter((product) => categories.includes(product.categories[0]))
                    .map((product) => {


                        return (
                            <Card key={product.id}
                            product={product}
                            currCart={currCart}
                            addToCart={addToCart}
                            addQuantityToProductOnCart={addQuantityToProductOnCart}
                            reduceQuantityToProductOnCart={reduceQuantityToProductOnCart}
   
                            />
                            
                        )
                    })
                }

            </section>
        </MainContainer>


    )


}
export default Main