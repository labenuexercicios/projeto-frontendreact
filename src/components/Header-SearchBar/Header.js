import { HeaderContainer } from './Header.styled'
import logo from '../../assets/logo.png'
import location from "../../assets/location.png"
import entrar from "../../assets/entrar.png"
import carrinho from "../../assets/carrinho.png"
import { useState } from 'react'
import { changeStringSearchStandard } from '../../uteis/searchStringStandard'

function Header(props) {
    const {  
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
        if(e.key==="Enter" || e.key ==="Tab")
        {
            const newInputName = changeStringSearchStandard(e.target.value)
            setInputName(newInputName)
            setDummyInput("")
        setScreen("main")

          
        }

    }
    
    return (
        <HeaderContainer>
            <img onClick={()=>handleSreenChange("welcome")} className='logo' src={logo} alt="logo Espaço Legal" />
            
            {(screen==="main" || screen === "cart" || screen === "welcome" || screen === "product") &&

            <div className='input-endereco'>
                <div>
                    <img src={location} alt="icon location"/>
                    <p>Rua Dr. Juvenal dos Santos 270 - Belo Horizonte Minas Gerais</p>
                </div>
                <input type="text" value={dummyInput} onChange={handleChangeinInput} placeholder="Escrever aqui" list='products' onKeyDown={handleSendInput} />
                
                <datalist onChange={handleSendInput} id="products"  >
                    {
                        productsNames.map((productName)=>{
                          return  <option value={productName} key={productName}/>
                        })
                    }
                </datalist>
                
            </div>
         
}

{
screen!=="login" &&
<img onClick={()=>handleSreenChange("login")} className='login' src={entrar} alt="Login Sing up" />
}

{
screen!=="cart" &&
<img onClick={()=>handleSreenChange("cart")} className='cart' src={carrinho} alt="Cart" />
}
            
          





        </HeaderContainer>

    )


}
export default Header