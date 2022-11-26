import {Card} from '../Card/Card';
import {FilterArea} from '../FilterArea/FilterArea'
import {PageLogin} from '../PageLogin/PageLogin'
import {PageCart} from '../PageCart/PageCart'
import {ContainerMain,
        ImgBackground,
        PageStore, 
        ContainerFilterArea, 
        ContainerCard,
        BackgroundCard} from './styled'
import satellites from '../../Satellites/satellites.json'
import { useState } from "react"


export const Main = (props) => {
  const [inputName, setInputName] = useState("")
  const [radioYear, setRadioYear] = useState("")
  const [radioPrice, setRadioPrice] = useState("")  

  return(
    <ContainerMain>
      <ImgBackground src="https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      {props.page === "home"? 
        <ImgBackground src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      : props.page === "store" ?
        <PageStore>
        <ContainerFilterArea>
          <FilterArea
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
              return (<BackgroundCard key={satellite.id}>
                <p>{satellite.description}</p>
                <Card 
                satellite={satellite}
                listCart={props.listCart}
                setListCart={props.setListCart}
                />
              </BackgroundCard>)
            })
          }
        </ContainerCard>
        </PageStore>
      : props.page === "login"?
        <PageLogin/>
      : 
        <PageCart
        listCart={props.listCart}
        setListCart={props.setListCart}
        />
      }
    </ContainerMain>
  )
}