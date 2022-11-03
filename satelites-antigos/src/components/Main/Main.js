import {Card} from '../Card/Card';
import {FilterArea} from '../FilterArea/FilterArea'
import {ContainerMain, ContainerFilterCard, ContainerFilterArea, ContainerCard} from './styled'
import satellites from '../../Satellites/satellites.json'

export const Main = () => {
  return(
    <ContainerMain>
      <ContainerFilterCard>
        <ContainerFilterArea>
          <FilterArea/>
        </ContainerFilterArea>
        <ContainerCard>
          {satellites.map((satellite) => {
            return <Card 
              name={satellite.name} 
              image={satellite.image} 
              price={satellite.price} 
              description={satellite.description} 
              link={satellite.link}/>
          })}
        </ContainerCard>
        </ContainerFilterCard>
    </ContainerMain>
  )
}