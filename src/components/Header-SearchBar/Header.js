import { HeaderContainer } from './Header.styled'
import logo from '../../assets/logo.png'
import location from "../../assets/location.png"
import entrar from "../../assets/entrar.png"
import carrinho from "../../assets/carrinho.png"
import { useState } from 'react'
import { changeStringSearchStandard } from '../../uteis/searchStringStandard'

function Header(props) {
    const {  
        inputName,
        setInputName,
        productsNames,
        screen,
        setScreen
    } =props

    const [dummyInput, setDummyInput] = useState()
  


    const handleSreenChange = (screen)=>{
        setScreen(screen)

    }

   

    const handleChangeinInput = (e)=>
    {  

        setDummyInput(e.target.value)
        
       
    }

    const handleSendInput = (e, value)=>
    {
        if(e.key==="Enter")
        {
            const newInputName = changeStringSearchStandard(e.target.value)
        
            setInputName(newInputName)
            setDummyInput("")
        }

    }
    
    return (
        <HeaderContainer>
            <img onClick={()=>handleSreenChange(1)} className='logo' src={logo} alt="logo Espaço Legal" />
            
            {(screen===1 || screen === 3 ) &&

            <div className='input-endereco'>
                <div>
                    <img src={location} alt="icon location"/>
                    <p>Rua Dr. Juvenal dos Santos 270 - Belo Horizonte Minas Gerais</p>
                </div>
                <input type="text" value={dummyInput} onChange={handleChangeinInput} placeholder="Escrever aqui" list='products' onKeyDown={handleSendInput} />
                
                <datalist id="products"  >
                    {
                        productsNames.map((productName)=>{
                          return  <option value={productName} key={productName}/>
                        })
                    }
                </datalist>
                
            </div>
         
}

{
screen!==2 &&
<img onClick={()=>handleSreenChange(2)} className='login' src={entrar} alt="Login Sing up" />
}

{
screen!==3 &&
<img onClick={()=>handleSreenChange(3)} className='cart' src={carrinho} alt="Cart" />
}
            
          





        </HeaderContainer>

    )


}
export default Header