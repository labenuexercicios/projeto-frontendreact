import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator'

const PaginaErro = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Alert
        status='error'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='100vh'
        width='100vw'
      >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Página não encontrada
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        Essa página que você tentou acessar não existe.
      </AlertDescription>
        <Box p={5}>
          <Button colorScheme={"gray"} onClick={() => goToHomePage(navigate)}>Voltar para a página inicial</Button>
        </Box>
      </Alert>
    </div>
  )
}

export default PaginaErro