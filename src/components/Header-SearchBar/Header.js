import { HeaderContainer } from './Header.styled'
import logo from '../../assets/logo.png'
import location from "../../assets/location.png"
import entrar from "../../assets/entrar.png"
import carrinho from "../../assets/carrinho.png"
import logOn from "../../assets/logon.png"
import { useEffect, useState } from 'react'
import { changeStringSearchStandard } from '../../uteis/searchStringStandard'

function Header(props) {
    const {
        setInputName,
        productsNames,
        screen,
        setScreen
    } = props

    const [dummyInput, setDummyInput] = useState()
    const [isLogOn, setIslogOn] = useState(false)
    const [userDummy, setUserDummy] = useState({})

    const userS = localStorage.getItem("user")
    const user = (JSON.parse(userS))



    useEffect(() => {
        if (user !== null) {
            user.length > 0 ? setIslogOn(true) : setIslogOn(false)
        }
    }, [user])

  



    const handleSreenChange = (screen) => {
        setScreen(screen)

    }



    const handleChangeinInput = (e) => {

        setDummyInput(e.target.value)



    }

    const handleSendInput = (e, value) => {
        if (e.key === "Enter" || e.key === "Tab") {
            const newInputName = changeStringSearchStandard(e.target.value)
            setInputName(newInputName)
            setDummyInput("")
            setScreen("main")


        }

    }

    return (
        <HeaderContainer>
            <img onClick={() => handleSreenChange("welcome")} className='logo' src={logo} alt="logo Espaço Legal" />

            {(screen !== "login") &&

                <div className='input-endereco'>
                    <div>
                        <img src={location} alt="icon location" />
                        <p>Rua Dr. Juvenal dos Santos 270 - Belo Horizonte Minas Gerais</p>
                    </div>
                    <input type="text" value={dummyInput} onChange={handleChangeinInput} placeholder="Escrever aqui" list='products' onKeyDown={handleSendInput} />

                    <datalist onChange={handleSendInput} id="products"  >
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
                                <img onClick={() => handleSreenChange("account")} src={logOn} alt="LogOn" />
                                : <img onClick={() => handleSreenChange("login")} src={entrar} alt="Login Sing up" />
                        }
                        {isLogOn && <p>Olá, {user[0].firstName}</p>}
                    </div>

                }

                {
                    screen !== "cart" &&
                    <img onClick={() => handleSreenChange("cart")} className='cart' src={carrinho} alt="Cart" />
                }
            </div>







        </HeaderContainer>

    )


}
export default Header