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
        setInputName
    } =props

   

    const handleChangeinInput = (e)=>
    {  
        const searchInput =changeStringSearchStandard(e.target.value)
        setInputName(searchInput)
       
    }
    return (
        <HeaderContainer>
            <img className='logo' src={logo} alt="logo Espaço Legal" />

            <div className='input-endereco'>
                <div>
                    <img src={location} alt="icon location"/>
                    <p>Rua Dr. Juvenal dos Santos 270 - Belo Horizonte Minas Gerais</p>
                </div>
                <input type="text" value={inputName} onChange={handleChangeinInput} placeholder="Escrever aqui" />

            </div>

            <img className='login' src={entrar} alt="Login Sing up" />
            <img className='cart' src={carrinho} alt="Cart" />





        </HeaderContainer>

    )


}
export default Header