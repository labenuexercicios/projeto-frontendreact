import {ContainerFilterArea,
        DivInput, 
        Input, 
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

  return(
    <ContainerFilterArea>
      <DivFilter>
        <Filter>
          <label>Name</label>
          <DivInput>
            <Input type="text" value={props.inputName} onChange={ChangeInputName}></Input>
            <ImgLupa src={lupa}/>
          </DivInput>
        </Filter>
        <Filter>
          <label>Ano</label>
          <DivInput>
            <Input type="text" value={props.inputName} onChange={ChangeInputName}></Input>
            <ImgLupa src={lupa}/>
          </DivInput>
        </Filter>
      </DivFilter>
    </ContainerFilterArea>
  )
}