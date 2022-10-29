import {Card} from '../Card2/Card';
import {ContainerMain, ContainerCard} from './styled'
import satellites from '../../Satellites/satellites.json'

export const Main = () => {
  return(
    <ContainerMain>
      <ContainerCard>
        {satellites.map((satellite) => {
          return <Card name={satellite.name} image={satellite.image} price={satellite.price}/>
        })}
      </ContainerCard>
    </ContainerMain>
  )
}