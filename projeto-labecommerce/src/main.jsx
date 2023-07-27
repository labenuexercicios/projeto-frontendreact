import React from 'react'
import ReactDOM from 'react-dom/client'

//Essa é a página principal
import { App } from './App'
//A configuração/configuração padrão do site
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
