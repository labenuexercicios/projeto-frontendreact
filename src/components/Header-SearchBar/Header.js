import { DatalistWrapper, HeaderContainer } from './Header.styled'
import logo from '../../assets/logo.png'
import location from "../../assets/location.png"
import entrar from "../../assets/entrar.png"
import carrinho from "../../assets/carrinho.png"
import logOn from "../../assets/logon.png"
import { useEffect, useState } from 'react'
import { changeStringSearchStandard } from '../../uteis/searchStringStandard'

function Header(props) {
    const {
        inputName,
        setInputName,
        productsNames,
        screen,
        setScreen
    } = props

    const [dummyInput, setDummyInput] = useState()
    const [isLogOn, setIslogOn] = useState(false)
    

    const userS = localStorage.getItem("user")
    const user = (JSON.parse(userS))



    useEffect(() => {
        if (user !== null) {
            user.length > 0 ? setIslogOn(true) : setIslogOn(false)
        }
    }, [user])

  


    const handleSendInput = (e) => {
       
        if (e.key === "Enter") {
            setScreen("main")
          
        }

    }

    return (
        <HeaderContainer>
            <img onClick={() => setScreen("welcome")} className='logo' src={logo} alt="logo Espaço Legal" />

            {(screen !== "login") &&

                <div className='input-endereco'>
                    <div>
                        <img src={location} alt="icon location" />
                        <p>Rua Dr. Juvenal dos Santos 270 - Belo Horizonte Minas Gerais</p>
                    </div>
                    <input type="text" value={inputName} onChange={(e)=>setInputName(e.target.value)} placeholder="Escrever aqui" list='products' onKeyDown={handleSendInput} />
                  

                    <datalist className='datalist-2' onChange={handleSendInput} id="products"  >
                        {
                            productsNames.map((productName) => {
                                return <option value={productName} key={productName} />
                            })
                        }
                    </datalist>
                       

                </div>

            }
            <div className='icons'>

                {
                    screen !== "login" &&

                    <div className='login'>
                        {
                            isLogOn ?
                                <img onClick={() => setScreen("account")} src={logOn} alt="LogOn" />
                                : <img onClick={() => setScreen("login")} src={entrar} alt="Login Sing up" />
                        }
                        {isLogOn && <p>Olá, {user[0].firstName}</p>}
                    </div>

                }

                {
                    screen !== "cart" &&
                    <img onClick={() => setScreen("cart")} className='cart' src={carrinho} alt="Cart" />
                }
            </div>







        </HeaderContainer>

    )


}
export default Header