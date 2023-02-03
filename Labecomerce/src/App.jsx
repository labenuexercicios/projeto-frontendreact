import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Componentes/Header/Header'
import { GlobalStyle } from './GlobalStyles'
import { Main } from './Componentes/Main/Main'
import { PopUp } from './Componentes/PopUp/PopUp.jsx'

function App() {

  const produtos = [
    {
      nome: "HUBBLE",
      img: "https://terramagna.com.br/wp-content/uploads/2022/09/aparelho-imagens-de-satelite-espaco-terra.jpg",
      preco: 1000000,
      descricao: "O melhor dos satélites",
      id: 1
    },
    {
      nome: "BUBBLEBEE",
      img: "https://ogimg.infoglobo.com.br/in/12792199-5d6-92c/FT1086A/satelite-oi.jpg",
      preco: 200000,
      descricao: "O melhor dos satélites",
      id: 2
    },
    {
      nome: "KUBRICK",
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/satelite-capa.jpg",
      preco: 550000,
      descricao: "O melhor dos satélites",
      id: 3
    },
    {
      nome: "HOPI HARI",
      img: 'https://energiainteligenteufjf.com.br/wp-content/uploads/2020/09/qual-tamanho-satelite-tricurioso.jpg',
      preco: 460000,
      descricao: "O melhor dos satélites",
      id: 4
    }
  ]

  const [showPopUp, setShowPopUp] = useState(false)
  const [clickId, setClickId] = useState("")

  const clickIdHandler = (event) => {
    setClickId(event.target.value)
  }

  const popUpHandler = (id) => {
    setShowPopUp(!showPopUp);
    setClickId(id)
    console.log(showPopUp)
    console.log(clickId)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {showPopUp && <PopUp produtos={produtos} clickId={clickId} />}
      <Main produtos={produtos} popUpHandler={popUpHandler} />
    </div>
  )
}

export default App
