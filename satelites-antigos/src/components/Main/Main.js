import {Card} from '../Card/Card';
import {FilterArea} from '../FilterArea/FilterArea'
import {ContainerMain, 
        ContainerFilterCard, 
        ContainerFilterArea, 
        ContainerCard,
        CardName,
        Name} from './styled'
import satellites from '../../Satellites/satellites.json'
import { useState } from "react"


export const Main = () => {
  // const [infoFilter, setInfoFilter] = useState({})
  const [inputName, setInputName] = useState("")

  return(
    <ContainerMain>
      <ContainerFilterCard>
        <ContainerFilterArea>
          <FilterArea
            // setInfoFilter={setInfoFilter}
            inputName={inputName}
            setInputName={setInputName}
            />
        </ContainerFilterArea>
        <ContainerCard>
          {satellites
            .filter((satellite)=> {
              return satellite.name.includes(inputName)
            })
            .map((satellite) => {
              return (<CardName>
                <Name>{satellite.description}</Name>
                <Card 
                name={satellite.name} 
                image={satellite.image} 
                price={satellite.price} 
                description={satellite.description} 
                link={satellite.link}
                />
              </CardName>)
            })
          }
        </ContainerCard>
        </ContainerFilterCard>
    </ContainerMain>
  )
}