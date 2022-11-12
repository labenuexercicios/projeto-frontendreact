import { useState } from 'react'
import { CategoriesContainer, FilterContainer, PriceRangeContainer } from './Filter.styled'

export default function Filter(props) {
    const {
        maxPriceProduct,
        priceMin,
        priceMax,
        handleOnchagePriceMin,
        handleOnchagePriceMax,
        handleOnChangeCategory
    } = props

  const [brin,setBrin] =useState(true)
  const [livros,setLivros] =useState(true)
  const [roupas,setRoupas] =useState(true)

  const handleCheckLivros = (e)=>{
    setLivros(e.target.checked)
    handleOnChangeCategory(e)
  }
  const handleCheckBrin = (e)=>{
    setBrin(e.target.checked)
    handleOnChangeCategory(e)
  }
  const handleCheckRoupas = (e)=>{
    setRoupas(e.target.checked)
    handleOnChangeCategory(e)
  }





    const percentageMax = ((1 - (priceMax / maxPriceProduct)).toFixed(1) * 100)
    const percentageMin = ((priceMin / maxPriceProduct).toFixed(1) * 100)
  
    const stringPercentageMax = `${percentageMax}%`
    const stringPercentageMin = `${(percentageMin)}%`
  
   



    return (
        <FilterContainer>
            <h1>Filtrado por:</h1>
            <PriceRangeContainer stringPercentageMax={stringPercentageMax} stringPercentageMin={stringPercentageMin} >
                <h2>Faixa de preco</h2>
                <hr/>
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
            <CategoriesContainer>
                <h2>Categoria</h2>
                <label>Livros</label>
                <input type="checkbox" name='category' value="Livros" onChange={handleCheckLivros} checked={livros} />
                <label>Brinquedos</label>
                <input type="checkbox" name='category' value="Brinquedos" onChange={handleCheckBrin} checked={brin}/>
                <label>Roupas</label>
                <input type="checkbox" name='category' value="Roupas" onChange={handleCheckRoupas} checked={roupas} />
            </CategoriesContainer>
        
            {/* <div>
                <h2>Idade</h2>
                <label>0 a 2 anos</label>
                <input type="radio" name="age" value={[1]} onChange={handleOnchengeAge}/>
                <label>1 a 2</label>
                <input type="radio" name="age" value={[2]} onChange={handleOnchengeAge}/>
                <label>2 a 3</label>
                <input type="radio" name="age" value={[3]} onChange={handleOnchengeAge}/>
                <label>3 a 4</label>
                <input type="radio" name="age" value={[4]} onChange={handleOnchengeAge} />
                <label>Todas idades</label>
                <input type="radio" name="age" value={[]} onChange={handleOnchengeAge} />
            </div>
            <div>
                <h2>Marca</h2>
                <label>a</label>
                <input />
                <label>b</label>
                <input />
                <label>c</label>
                <input />
                <label>d</label>
                <input />
            </div> */}

        </FilterContainer>


    )


}