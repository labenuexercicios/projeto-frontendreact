import { Layout } from "../../components/Layout/Layout";
import {Store, ContainerFilters, BackgrondFilters, ContainerCard,BackgroundCard} from './styled'
import satellites from "../../Satellites/satellites.json"
import {useState} from 'react'
import { Filters } from "../../components/Filters/Filters";

export const StorePage = (props) => {
  const [inputName, setInputName] = useState("")
  const [radioYear, setRadioYear] = useState("")
  const [radioPrice, setRadioPrice] = useState("")  

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
              radioPrice={radioPrice}
              setRadioPrice={setRadioPrice}
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
              return (<BackgroundCard key={satellite.id}>
                <p>{satellite.description}</p>
                {/* <Card 
                satellite={satellite}
                listCart={props.listCart}
                setListCart={props.setListCart}
                /> */}
              </BackgroundCard>)
            })
          }
        </ContainerCard>
      </Store>
    </Layout>
  )
}