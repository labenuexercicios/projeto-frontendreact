import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductsProvider from './components/Context/ProductsContext'
import App from './App'
import Reset from './css/Reset'
import Base from './css/base'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Reset />
    <Base />
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BrowserRouter>
)



