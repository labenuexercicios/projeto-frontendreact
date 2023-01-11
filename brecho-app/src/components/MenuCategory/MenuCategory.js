
import React from 'react'
import { Category, Information, Information_desc, Information_desc_inf, LinkCategory, ListCategory, ListCategoryItem } from './style'

const Menu = () => {
    return (
        <div>
            <Category>
                <ListCategory>
                    <ListCategoryItem><LinkCategory href='#'>Promoções</LinkCategory></ListCategoryItem>
                    <ListCategoryItem><LinkCategory href='#'>Feminino</LinkCategory></ListCategoryItem>
                    <ListCategoryItem><LinkCategory href='#'>Masculino</LinkCategory></ListCategoryItem>
                    <ListCategoryItem><LinkCategory href='#'>Infantil</LinkCategory></ListCategoryItem>
                    <ListCategoryItem><LinkCategory href='#'>Acessórios</LinkCategory></ListCategoryItem>
                    <ListCategoryItem><LinkCategory href='#'>Tendências</LinkCategory></ListCategoryItem>
                    <ListCategoryItem><LinkCategory href='#'>Outlet</LinkCategory></ListCategoryItem>
                </ListCategory>
            </Category>
            <Information>
                <Information_desc><strong>Troca grátis</strong> em até 30 dias</Information_desc>
                <Information_desc><strong>Frete grátis</strong> para milhares de <strong>produtos*</strong><br /><Information_desc_inf>*Consulte no regulamento as regiões participantes</Information_desc_inf></Information_desc>
                <Information_desc>Parcele em até <strong>10x sem juros</strong></Information_desc>
            </Information>
        </div>
    )
}

export default Menu
