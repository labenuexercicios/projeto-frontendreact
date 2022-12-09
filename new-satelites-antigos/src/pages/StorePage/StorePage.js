import { Layout } from "../../components/Layout/Layout";
import {Store, ContainerFilters, BackgrondFilters, ContainerCard,BackgroundCard} from './styled'
import satellites from "../../Satellites/satellites.json"
import {useState} from 'react'
import { Filters } from "../../components/Filters/Filters";
import {Card} from '../../components/Card/Card'

export const StorePage = () => {
  const [inputName, setInputName] = useState("")
  const [radioYear, setRadioYear] = useState("")

  const sortByPrice = satellites.sort((a,b) => {
    if(a.price < b.price){
      return -1
    } else if (a.price > b.price){
      return 1
    }
  })

  const [sliderOne, setSliderOne] = useState(sortByPrice[0].price)
  const [sliderTwo, setSliderTwo] = useState(sortByPrice[sortByPrice.length-1].price)

  return (
    <Layout>
      <Store>
        <ContainerFilters>
          <BackgrondFilters>
            <Filters
              inputName={inputName}
              setInputName={setInputName}
              radioYear={radioYear}
              setRadioYear={setRadioYear}
              sliderOne={sliderOne}
              setSliderOne={setSliderOne}
              sliderTwo={sliderTwo}
              setSliderTwo={setSliderTwo}
              sortByPrice={sortByPrice}
            />
          </BackgrondFilters>
        </ContainerFilters>
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
              } else {
                return 0
              }
            })
            .filter((satellite)=>{
              return satellite.price >= sliderOne && satellite.price <= sliderTwo
            })
            .map((satellite) => {
              return (<BackgroundCard key={satellite.id}>
                {/* <p>{satellite.description}</p> */}
                <Card 
                satellite={satellite}
                />
              </BackgroundCard>)
            })
          }
        </ContainerCard>
      </Store>
    </Layout>
  )
}