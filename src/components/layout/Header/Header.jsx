import { useRef, useContext, useState } from 'react'
import * as h from './styled'
import { ProductsContext } from '../../Context/ProductsContext'
import { ContaninerMenuMobile, HeaderMenu } from "./stelydMenuMobile";
import { useNavigate } from 'react-router-dom';
import { modal } from '../../Libs/Lib'

function handleOnChange(e, setState) {
    setState(e.target.value)
}

export default function Header() {

    const navigate = useNavigate()

    const filterIsOn = () => {
        const name = nameFind.current
        setFilterName(name.value)
        name.value = ''
    }

    const {
        itemsCart,
        setFilterName,
        setFilterSector
    } = useContext(ProductsContext)

    const nameFind = useRef(null)

    return (
        <h.Header>
            <h.Container>
                <h.Logo>
                    <img src="/static/logo/logo.png" alt="logo image" />
                </h.Logo>
                <h.BoxAux>            
                    <h.Cart>
                        <span>{itemsCart}</span>
                        <img onClick={() => itemsCart ?
                            navigate("/shoppingcart") :
                        navigate("/emptycart")} src="/static/icons/cart_view.svg" alt='cart image' />
                    </h.Cart>
                </h.BoxAux>
            </h.Container>
            <MenuMobile />
            <h.Sections>
                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='all'>Todos</h.ButtonSelect>

                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='shirts'>Camisas</h.ButtonSelect>

                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='shoes'>Calçados</h.ButtonSelect>

                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='mugs'>Canecas</h.ButtonSelect>

                <h.ButtonSelect onClick={(e) => handleOnChange(e, setFilterSector)} value='schoolbags'>Mochilas</h.ButtonSelect>
            </h.Sections>
        </h.Header>
    )

}

function MenuMobile() {

    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => setIsOpen(!isOpen)
    const {
        itemsCart,
        setViewCart,
        setFilterName,
        setFilterSector
    } = useContext(ProductsContext)

    function handleOnChangeMobile(e, setState)  {
        handleOnChange(e, setState)
        setIsOpen()
    }

    return (
        <>
            <HeaderMenu>
                <button onClick={handleMenu}></button>
            </HeaderMenu>
            <ContaninerMenuMobile isOpen={isOpen}>
                <ul>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='all'>Produtos</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='toys'>Brinquedos</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='schoolbags'>Mochilas</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='mugs'>Canecas</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='shirts'>Roupas</button></li>
                    <li><button onClick={(e) => handleOnChangeMobile(e, setFilterSector)} value='shoes'>Calçados</button></li>
                </ul>
            </ContaninerMenuMobile>
        </>
    )
}