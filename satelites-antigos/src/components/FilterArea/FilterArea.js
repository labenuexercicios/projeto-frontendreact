import {ContainerFilterArea,
        DivInput, 
        InputText,
        InputRadio,
        DivInputRadio, 
        ImgLupa,
        DivFilter,
        Filter} from './styled'
import lupa from '../../img/lupa.png'
import { useState } from "react"


export const FilterArea = (props) => {
  // const [inputName, setInputName] = useState("")
  function ChangeInputName (e){
    props.setInputName(e.target.value)
  }

  // function ChangeInfoFilter(){
  //   props.setInfoFilter({
  //     name: inputName
  //   })
  //   setInputName("")
  // }

  function onChangeRadioYear (e){
    props.setRadioYear(e.target.id)
  }
  function onChangeRadioPrice (e){
    props.setRadioPrice(e.target.id)
  }

  return(
    <ContainerFilterArea>
      <DivFilter>
        <Filter>
          <label>satellite Name</label>
          <DivInput>
            <InputText type="text" value={props.inputName} onChange={ChangeInputName}></InputText>
            <ImgLupa src={lupa}/>
          </DivInput>
        </Filter>
        <Filter>
          <p>Sort by year of release</p>
          <DivInputRadio>
            <InputRadio type="radio" id='older' name='byYear' value={props.radioYear} onChange={onChangeRadioYear}></InputRadio>
            <label htmlFor='older'>Older</label>
          </DivInputRadio>
          <DivInputRadio>
            <InputRadio type="radio" id='last' name='byYear' value={props.radioYear} onChange={onChangeRadioYear}></InputRadio>
            <label htmlFor="last">Last</label>
          </DivInputRadio>
        </Filter>
        <Filter>
          <p>sort by price</p>
          <DivInputRadio>
            <InputRadio type="radio" id='lowest' name='byPrice' value={props.radioPrice} onChange={onChangeRadioPrice}></InputRadio>
            <label htmlFor='older'>Lowest price</label>
          </DivInputRadio>
          <DivInputRadio>
            <InputRadio type="radio" id='biggest' name='byPrice' value={props.radioPrice} onChange={onChangeRadioPrice}></InputRadio>
            <label htmlFor="last">biggest price</label>
          </DivInputRadio>
        </Filter>
      </DivFilter>
    </ContainerFilterArea>
  )
}