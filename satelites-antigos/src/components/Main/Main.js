import {Card} from '../Card/Card';
import {FilterArea} from '../FilterArea/FilterArea'
import {ContainerMain, ContainerFilterCard, ContainerFilterArea, ContainerCard} from './styled'
import satellites from '../../Satellites/satellites.json'
import { useState } from "react"


export const Main = () => {
  const [infoFilter, setInfoFilter] = useState({})

  return(
    <ContainerMain>
      <ContainerFilterCard>
        <ContainerFilterArea>
          <FilterArea
            setInfoFilter={setInfoFilter}/>
        </ContainerFilterArea>
        <ContainerCard>
          {satellites.map((satellite) => {
            return <Card 
              name={satellite.name} 
              image={satellite.image} 
              price={satellite.price} 
              description={satellite.description} 
              link={satellite.link}
             />
          })
          // .filter((satellite) => {
          //   console.log(satellite.name)
          //   return <Card name={satellite.name === infoFilter.toLowerCase()}/> 
            
          // })
          }
        </ContainerCard>
        </ContainerFilterCard>
    </ContainerMain>
  )
}