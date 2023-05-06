import React from 'react'
import ReactDOM from 'react-dom/client'

//Essa é a página principal
import { Index } from './index'
//A configuração/configuração padrão do site
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index /> 
  </React.StrictMode>,
)
