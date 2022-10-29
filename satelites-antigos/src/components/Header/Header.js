import {ContainerHeader, Img} from './styled'
// import textoLogo from '../../img/Sem Título-1.png'
import textoLogo from '../../img/space-collection.png'

export const Header = () => {
  return(
    <>
      <ContainerHeader>
      <Img src={textoLogo}/>
      </ContainerHeader>
    </>
  )
}