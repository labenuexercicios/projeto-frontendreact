import millenium from '../../assets/naves/millenium.svg'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    color,
  } from '@chakra-ui/react';

  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export const Products = (props)=>{
    return (
      <Center py={12}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}

          >
            <Image
            rounded={'lg'}
            height={130}
            width={182}
            objectFit={'cover'}
            src={millenium}/>
          <Stack pt={5} align={'flex-start'}>
            <Heading fontSize={'12px'} fontFamily={'Poppins, sans-serif'} fontWeight={500} width={'80%'} paddingLeft={'2px'}>
                <a href='#'>{props.naves.nave}</a>
            </Heading>
            <Stack direction={'row'}>
              <Text fontWeight={400} fontSize={'10px'} fontFamily={'Poppins, sans-serif'} paddingLeft={'2px'}>
                R$ {props.naves.price}
              </Text>

              <Button fontWeight={400} fontSize={'10px'} fontFamily={'Poppins, sans-serif'}
              backgroundColor=' #FF008A' width={'50%'} height={'20%'}
              display='flex' justifyContent={'center'} color={'white'}
              borderRadius={'5px'} cursor={'pointer'} transition={'0.5s'} _hover={{backgroundColor: '#32e55f'}}
              >Adicionar</Button>

            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }