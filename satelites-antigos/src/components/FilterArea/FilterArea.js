import {ContainerFilterArea, DivInput, Input, ImgLupa} from './styled'
import lupa from '../../img/lupa.png'
import { useState } from "react"


export const FilterArea = (props) => {
  const [inputName, setInputName] = useState("")
  function ChangeInputName (e){
    setInputName(e.target.value)
    console.log(inputName)
  }

  function ChangeInfoFilter(){
    props.setInfoFilter({
      name: inputName
    })
  }

  return(
    <ContainerFilterArea>
      <label>Name</label>
      <DivInput>
        <Input type="text" value={inputName} onChange={ChangeInputName}></Input>
        <ImgLupa src={lupa} onClick={ChangeInfoFilter}/>
      </DivInput>
    </ContainerFilterArea>
  )
}