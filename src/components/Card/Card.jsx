import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Tooltip,
  Button,
  Text
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

function Card(props) {

const context = useContext(GlobalContext);
const { carrinho, setCarrinho, viagensEspaciais, setContador, setComponentesCarrinho, componentesCarrinho } = context;
const { viagem } = props;

  const data = {
    imageURL: viagem.img,
    name: viagem.destino,
    price: viagem.valor,
    description: viagem.descricao
  };

  //Calcular a quantidade total
  let quantidadeTotal = 0
  carrinho.map((produto) => (quantidadeTotal = quantidadeTotal + produto.quantidade));
  setContador(quantidadeTotal)

  const onClickAdicionar = (id) => {
  const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        quantidade: novoCarrinho[i].quantidade + 1
      };
      setCarrinho(novoCarrinho);
    } else {
      const produtoEncontrado = viagensEspaciais.find((viagem) => viagem.id === id);
      const novoProduto = { ...produtoEncontrado, quantidade: 1 };
      setCarrinho([...carrinho, novoProduto]);
      setComponentesCarrinho({...componentesCarrinho, badge: true})
    }
  }

  return (
    <Flex p="1vw" w="25vw" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        h="65vh"
        >

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          h="30vh"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blue">
                {viagem.nave}
              </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              w="18vw">
              {data.name}
              <Text fontSize='xs'>{data.description}</Text>
            </Box>
            <Tooltip
              label="Adicionar ao carrinho"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1em'}
              >
              <Button variant='ghost' w="0.5vw" pl="1vw" onClick={() => onClickAdicionar(viagem.id)}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </Button>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;