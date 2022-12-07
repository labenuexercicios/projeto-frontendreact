import searching from '../../assets/icons/searching.svg'
import { Price, Search, ImgIcon,Aside} from './style'

export const Filters = (props) => {

  function handleMinValue(e){   
    props.setMinValue(e.target.value)
  }

  function handleMaxValue(e){   
    props.setMaxValue(e.target.value)
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
      </Aside>
  )
}