import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import {Footer} from "../../components/Footer/Footer"
import {satellites} from "../../Satellites/satellites.json"

export const StorePage = () => {
  const [inputName, setInputName] = useState("")
  const [radioYear, setRadioYear] = useState("")
  const [radioPrice, setRadioPrice] = useState("")
  
  return (
    <>
      <Header/>
      <Main>
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
      </Main>
      <Footer/>
    </>
  )
}