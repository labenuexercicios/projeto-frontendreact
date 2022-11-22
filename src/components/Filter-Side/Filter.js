import { useEffect, useState } from 'react'
import { CategoriesContainer, FilterContainer, PriceRangeContainer } from './Filter.styled'

export default function Filter(props) {
    const {
        maxPriceProduct,
        priceMin,
        priceMax,
        setSelect,
        handleOnchagePriceMin,
        handleOnchagePriceMax,
        handleOnChangeCategory,
        setInputName
    } = props

    const [brin, setBrin] = useState(true)
    const [livros, setLivros] = useState(true)
    const [roupas, setRoupas] = useState(true)

    const handleCheckLivros = (e) => {
        setLivros(e.target.checked)
        handleOnChangeCategory(e)
    }
    const handleCheckBrin = (e) => {
        setBrin(e.target.checked)
        handleOnChangeCategory(e)
    }
    const handleCheckRoupas = (e) => {
        setRoupas(e.target.checked)
        handleOnChangeCategory(e)
    }

const handleClickReset= () =>{
    setInputName("")
    setSelect("Destaque")
}





    const percentageMax = ((1 - (priceMax / maxPriceProduct))* 100)
    const percentageMin = ((priceMin / maxPriceProduct) * 100)

    const stringPercentageMax = `${percentageMax}%`
    const stringPercentageMin = `${(percentageMin)}%`





    return (
        <FilterContainer>
            <h1>Filtrado por:</h1>
            <PriceRangeContainer stringPercentageMax={stringPercentageMax} stringPercentageMin={stringPercentageMin} >
                <h2>Faixa de preco</h2>
                
                <div className='price-input'>

                    <div  >
                        <label>Min</label>
                        <input type="number" value={priceMin} onChange={handleOnchagePriceMin} />

                    </div>
                    <div>
                        <label>Max</label>
                        <input type="number" value={priceMax} onChange={handleOnchagePriceMax} />

                    </div>
                </div>
                <div className='slider'>
                    <div className='progress'></div>
                </div>
                <div className='range-input'>
                    <input type="range" className="range-min" min="0" max={maxPriceProduct} value={priceMin} onChange={handleOnchagePriceMin} />
                    <input type="range" className="range-max" min="0" max={maxPriceProduct} value={priceMax} onChange={handleOnchagePriceMax} />

                </div>
              

            </PriceRangeContainer>
            <hr />
            <CategoriesContainer>
                <h2>Categoria</h2>
                <div>
                    <label>Livros</label>
                    <input type="checkbox" name='category' value="Livros" onChange={handleCheckLivros} checked={livros} />
                </div>
                <div>
                    <label>Brinquedos</label>
                    <input type="checkbox" name='category' value="Brinquedos" onChange={handleCheckBrin} checked={brin} />
                </div>
                <div>
                    <label>Roupas</label>
                    <input type="checkbox" name='category' value="Roupas" onChange={handleCheckRoupas} checked={roupas} />
                </div>
            </CategoriesContainer>
            <hr/>


            <button onClick={handleClickReset}>Resetar pesquisa</button>

           

        </FilterContainer>


    )


}