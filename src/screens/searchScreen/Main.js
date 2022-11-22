import { MainContainer, NavContainer, ListaContainer } from './Main.styled.'
import Filter from '../../components/Filter-Side/Filter'
import Card from '../../components/Card-Products/Card'

import { useState } from 'react'
import { changeStringSearchStandard } from '../../uteis/searchStringStandard'

function Main(props) {
    const {
        inputName,
        products,
        currCart,
        addToCart,
        addQuantityToProductOnCart,
        reduceQuantityToProductOnCart,
        setInputName,
        handleClickProduct,
        screen
    } = props



    const handleOnchagePriceMin = (e) => {
       
        e.target.value? setPriceMin(e.target.value):setPriceMin(0)   
    }
    const handleOnchagePriceMax = (e) => {
       console.log(e.target.value);
       e.target.value?setPriceMax(e.target.value):setPriceMax(0)
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


    const arrayPriceDiscont = products.map((prod) => {

        const priceDiscont = prod.price * (1 - (prod.offPrice / 100))
        return { ...prod, priceDiscont: priceDiscont }
    })
    const sortMaxMin = arrayPriceDiscont.sort((a, b) => a.priceDiscont - b.priceDiscont)
    const maxPriceProduct = ((sortMaxMin[sortMaxMin.length - 1].priceDiscont).toFixed(0))

    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(maxPriceProduct)
    const [categories, setCategories] = useState(["Livros", "Brinquedos", "Roupas"])
    const [select, setSelect] = useState("Destaque")


    const handleOnChangeSelect = (e) => {
        setSelect(e.target.value)
        handleSwicthCase(e.target.value)

    }
    const handleSwicthCase = (selected) => {
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
            case "MediaAvaliacao":
                return arrayPriceDiscont.sort((a, b) => a.evaluation - b.evaluation)
            case "MaiorDesconto":
                return arrayPriceDiscont.sort((a, b) => b.offPrice - a.offPrice)
                default:
                return sortMaxMin


        }

    }






    return (
        <MainContainer>
            <Filter maxPriceProduct={maxPriceProduct}
            setInputName={setInputName}
                priceMin={priceMin}
                priceMax={priceMax}
                setSelect={setSelect}
                handleOnchagePriceMin={handleOnchagePriceMin}
                handleOnchagePriceMax={handleOnchagePriceMax}
                handleOnChangeCategory={handleOnChangeCategory}
            />
            <div className='div-products' >

                <nav>

                    <label>Ordenar por:</label>
                    <select value={select} onChange={handleOnChangeSelect}>
                        <option value="Destaque" >Destaque</option>
                        <option value="Crescente" >De A a Z</option>
                        <option value="Decrescente" >De Z a A</option>
                        <option value="MaiorPreco" >Preço: Maior</option>
                        <option value="MenorPreco" >Preço: Menor</option>
                        <option value="MediaAvaliacao" >Avaliação</option>
                        <option value="MaiorDesconto" >Maior Desconto</option>
                    </select>
                </nav>



                <section>
                    {handleSwicthCase(select)
                        .filter((product) => changeStringSearchStandard(product.name).includes(changeStringSearchStandard(inputName)))
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
                                    handleClickProduct={handleClickProduct}
                                    screen={screen}

                                />

                            )
                        })
                    }

                </section>
            </div>
        </MainContainer>


    )


}
export default Main