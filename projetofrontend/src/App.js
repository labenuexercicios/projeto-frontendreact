import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from './GlobalStyle.styled'
import Mercado from './components/Mercado'

const App = () => {
  return (
    <>
        <ChakraProvider>
            <GlobalStyle />
            <Mercado />
        </ChakraProvider>
    </>
  )
}

export default App
