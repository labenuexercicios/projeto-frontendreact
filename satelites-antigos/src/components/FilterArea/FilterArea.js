import {ContainerFilterArea, DivInput, Input, ImgLupa} from './styled'
import lupa from '../../img/lupa.png'

export const FilterArea = () => {
  return(
    <ContainerFilterArea>
      <label>Name</label>
      <DivInput>
        <Input></Input>
        <ImgLupa src={lupa}/>
      </DivInput>
    </ContainerFilterArea>
  )
}