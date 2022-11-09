import {ItemCart} from './styled'

export const PageCart = (props) => { 

  return(
    <>
        {props.listCart.length !== 0 ? 
          // props.listCart.map((item) => {
            <ItemCart>
              {/* <img src={item.image}/> */}
              <p>Tem item</p>

            </ItemCart>
          // })
          :
            <ItemCart>
              <p>Nenhum item comprado</p>
            </ItemCart>
        }
    </>
  )
}