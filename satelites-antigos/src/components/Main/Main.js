import {Card} from '../Card/Card';
import {FilterArea} from '../FilterArea/FilterArea'
import {ContainerMain, 
        ContainerFilterCard, 
        ContainerFilterArea, 
        ContainerCard,
        CardName,
        Description} from './styled'
import satellites from '../../Satellites/satellites.json'
import { useState } from "react"


export const Main = () => {
  // const [infoFilter, setInfoFilter] = useState({})
  const [inputName, setInputName] = useState("")
  const [radioYear, setRadioYear] = useState("")
  const [radioPrice, setRadioPrice] = useState("")

  return(
    <ContainerMain>
      <ContainerFilterCard>
        <ContainerFilterArea>
          <FilterArea
            // setInfoFilter={setInfoFilter}
            inputName={inputName}
            setInputName={setInputName}
            radioYear={radioYear}
            setRadioYear={setRadioYear}
            radioPrice={radioPrice}
            setRadioPrice={setRadioPrice}
            />
        </ContainerFilterArea>
        <ContainerCard>
          {satellites
            .filter((satellite)=> {
              return satellite.name.includes(inputName)
            })
            .sort((a,b) => {
              if(radioYear === "older"){
                return a.year < b.year ? -1 : 1
              } else if (radioYear === "last"){
                return a.year > b.year ? -1 : 1
              }
            })
            .sort((a,b) => {
              if(radioPrice === "lowest"){
                return a.price < b.price ? -1 : 1
              } else if (radioPrice === "biggest"){
                return a.price > b.price ? -1 : 1
              }
            })
            .map((satellite) => {
              return (<CardName>
                <Description>{satellite.description}</Description>
                <Card 
                name={satellite.name} 
                image={satellite.image}
                year={satellite.year}
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