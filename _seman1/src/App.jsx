import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import { AppContext } from "./contexts/GlobalContext";

const App = () => (
  <AppContext>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </AppContext>
)

export default App
