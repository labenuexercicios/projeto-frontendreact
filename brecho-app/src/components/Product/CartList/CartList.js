import React from 'react'
import { ButtonNow, ButtonShopingCart, CloseButton, ContainerCart, ContainerModal, Content, ListShopingCart, Modal, PriceShopingCart, SubShopingCart, TitleCart, TitleShopingCart, ToShopingCart } from './styled'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const CartList = ({ cart, addItemCart, removeItemCart, setModalCart }) => {


  return (
    <Modal>
      <ContainerModal>
        <CloseButton ><CloseOutlinedIcon onClick={() => setModalCart(false)} /></CloseButton>
        <Content>
          <TitleCart>CARRINHO</TitleCart>

          <ContainerCart>
            {
              cart.map((item) => {
                return (
                  <ListShopingCart>
                    <img src={item.img} width={40} />
                    <TitleShopingCart>{item.title}</TitleShopingCart>
                    <ButtonShopingCart
                      onClick={() => removeItemCart(item.id, item.quantity)}
                    >-</ButtonShopingCart>
                    <span>{item.quantity}</span>
                    <ButtonShopingCart
                      onClick={() => addItemCart(item.id, item.quantity)}

                    >+</ButtonShopingCart>
                    <PriceShopingCart>R$ {item.price * item.quantity}</PriceShopingCart>
                  </ListShopingCart>
                )
              })
            }

            <ToShopingCart> Resumo do Pedido  <br/>
            <SubShopingCart>SubTotal:</SubShopingCart> <span></span>
              {
                cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0 )
              }
            </ToShopingCart>
            <ButtonNow>Compre agora</ButtonNow>
          </ContainerCart>

        </Content>
      </ContainerModal>
    </Modal>
  )
}

export default CartList
