import searching from '../../assets/icons/searching.svg'
import { Price, Search, ImgIcon,Aside} from './style'

export const Filters = (props) => {

  function handleMinValue(e){   
    props.setMinValue(e.target.value)
  }

  function handleMaxValue(e){   
    props.setMaxValue(e.target.value)
  }

  function handleOrder(e){
    props.setOrder(e.target.value);
  }

  function handleOrderPrice(e){
    props.setOrderPrice(e.target.value);
  }

  return (
      <Aside>
          <Price>
              <Search value={props.minValue} onChange={handleMinValue} placeholder='Valor Mínimo' type={'number'}/>
              
              <ImgIcon><img src={searching}/></ImgIcon>
          </Price>

          <Price>
              <Search value={props.maxValue} onChange={handleMaxValue} placeholder='Valor Máximo' type={'number'}/>
              
              <ImgIcon><img src={searching}/></ImgIcon>
          </Price>

        <article>
          <Price>
            <select value={props.order} onChange={handleOrder}>
              <option value="Ordenar">Ordenar Nome</option>
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
            </select>
          </Price>

          <Price>
            <select value={props.orderPrice} onChange={handleOrderPrice}>
              <option value="Ordenar">Ordenar Preço</option>
              <option value="MenorPreco">Menor Preço</option>
              <option value="MaiorPreco">Maior Preço</option>
            </select>
          </Price>
        </article>

      </Aside>
  )
}