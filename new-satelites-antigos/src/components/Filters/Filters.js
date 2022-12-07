import {ContainerFilterArea,
  DivInput, 
  DivInputRadio,
  DivFilter,
  DivRanger,
  Filter} from './styled'
import lupa from '../../assets/lupa.png'
import { useEffect, useState } from 'react'


export const Filters = (props) => {
// function ChangeInputName (e){
// props.setInputName(e.target.value)
// }

// function onChangeRadioYear (e){
// props.setRadioYear(e.target.id)
// }
// function onChangeRadioPrice (e){
// props.setRadioPrice(e.target.id)
// }

// const [sliderOne, setSliderOne] = useState(0)
// const [sliderTwo, setSliderTwo] = useState(100)
// const [max, setMax] = useState(props.sortByPrice[props.sortByPrice.length-1].price - 1000)
const [max, setMax] = useState(19000)
const [min, setMin] = useState(31000)

let minGap = 0


const slideOne = () => {
  if(props.sliderTwo - props.sliderOne <= 999){
    // setSliderOne(sliderTwo - minGap)
    // props.setSliderTwo(props.sortByPrice[props.sortByPrice.length-1])
    // setMax(props.sliderTwo - 1000)
    
    props.setSliderTwo(32000)
    // props.setSliderTwo(props.sliderOne + 1000)
    // console.log(sliderOne)
    
  }
  fillColor();
}
function slideTwo(){
  if(props.sliderTwo - props.sliderOne <= 999){
    // setSliderTwo(sliderOne + minGap)
    // props.setSliderOne(props.sortByPrice[0].price)
    props.setSliderOne(18000)
    // setMax(props.sliderTwo - 1000)
    // setMin(props.sliderOne + 1000)

  }
  // displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor(){
  // let percent1 = (sliderOne / 100) * 100;
  // let percent2 = (sliderTwo / 100) * 100;
  // sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

useEffect(()=>{
  slideOne();
  slideTwo()
},[props.sliderOne,props.sliderTwo])

return(
<ContainerFilterArea>
<DivFilter>
  <Filter>
    {/* <label>Filter by Name</label> */}
    <label>Filtar pelo nome do satélite</label>
    <DivInput>
      <input type="text" value={props.inputName} onChange={(e)=>props.setInputName(e.target.value)}></input>
      <img src={lupa}/>
    </DivInput>
  </Filter>
      <Filter>
        {/* <p>Sort by year of release</p> */}
        <p>Ordenar pelo ano de lançamento</p>
        <DivInputRadio>
          <input type="radio" id='older' name='byYear' value={props.radioYear} onChange={(e)=>props.setRadioYear(e.target.id)}></input>
          <label htmlFor='older'>Crescente</label>
        </DivInputRadio>
        <DivInputRadio>
          <input type="radio" id='last' name='byYear' value={props.radioYear} onChange={(e)=>props.setRadioYear(e.target.id)}></input>
          <label htmlFor="last">Decrescente</label>
        </DivInputRadio>
      </Filter>
  {/* <Filter>
    <p>sort by price</p>
    <DivInputRadio>
      <input type="radio" id='lowest' name='byPrice' value={props.radioPrice} onChange={onChangeRadioPrice}></input>
      <label htmlFor='older'>Lowest</label>
    </DivInputRadio>
    <DivInputRadio>
      <input type="radio" id='biggest' name='byPrice' value={props.radioPrice} onChange={onChangeRadioPrice}></input>
      <label htmlFor="last">biggest</label>
    </DivInputRadio>
  </Filter> */}
  <Filter>
    {/* <p>Sort by year of release</p> */}
    {/* <p>Filter by price range</p> */}
    <p>Filtrar por faixa de preço</p>
    <DivRanger>
      <div className='values'>
        <span id='range1'>{props.sliderOne === 18000 ? "MIN" : props.sliderOne} </span>
        <span>-</span>
        <span id='range2'> {props.sliderTwo === 32000 ? "MAX" : props.sliderTwo}</span>
      </div>
      <div className='container'>
        <div></div>
        <input 
          type="range" 
          id='slider-1' 
          name='min' 
          min={props.sortByPrice[0].price} 
          max={props.sortByPrice[props.sortByPrice.length-1].price - 1000}
          value={props.sliderOne} 
          onChange={(e)=>props.setSliderOne(e.target.value)}
        />
        <input 
          type="range" 
          id='slider-2' 
          name='max' 
          min={props.sortByPrice[0].price + 1000} 
          max={props.sortByPrice[props.sortByPrice.length-1].price}
          value={props.sliderTwo} 
          onChange={(e)=>props.setSliderTwo(e.target.value)}
        />
      </div>
      {/* <label htmlFor='older'>Older</label> */}
    </DivRanger>
    {/* <DivInputRadio>
      <input type="radio" id='last' name='byYear' value={props.radioYear} onChange={onChangeRadioYear}></input>
      <label htmlFor="last">Last</label>
    </DivInputRadio> */}
  </Filter>
</DivFilter>
</ContainerFilterArea>
)
}