import React from 'react'
import Logo from '../../images/logo.png'
import './Header.css'

// import { useNavigate } from 'react-router-dom'
// import { handleCarrinho } from '../../Router/cordinator'

const Header = ({onOrderChanged}) =>{

    return(
        <> {

            <div className='header-container'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                    
                </div>
                <nav>
                    <ul><select name="Ordenar" onChange={onOrderChanged}>
                        <option value="1">Por ordem crescente</option>
                        <option value="2">Por ordem decrescente</option>
                        <option value="3">Por cor</option>
                    </select>
                        
                        <li>Saiba mais</li>
                        <li>Promoções</li>
                        <li>Mais vendidos</li>
                        <li>Carrinho</li>
                        
                    </ul>
                </nav>
            </div>
} </>
            

    )
}

export default Header