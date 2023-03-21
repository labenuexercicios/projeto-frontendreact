import React, { useState } from 'react'
import { Container, Wrapper, SearchContainer, Input, Logo, MenuItem, LogoNave, Menu, Search, Category } from '../Navbar/style'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ButtonCarrinhoModal } from './style';


const Navbar = ({busca, setBusca, count, setModalCart}) => {

    

    

    return (
        <Container>
            <Wrapper>
                <LogoNave><Logo>BRECHÓ.</Logo></LogoNave>
                <Search>
                    <SearchContainer>
                        <Input 
                            placeholder='Olá, o que está procurando hoje?'
                            value={busca}
                            onChange={event => setBusca(event.target.value)}
                        />
                        <SearchIcon style={{color: "black", fontSize:22}} />
                    </SearchContainer>
                </Search>
                <Menu>
                    <MenuItem><FavoriteBorderOutlinedIcon style={{color: "white"}}/>Lista de desejos</MenuItem>
                    <MenuItem><LogoutOutlinedIcon style={{color: "white"}}/>Entrar</MenuItem>
                    <MenuItem >
                        <ButtonCarrinhoModal><Badge badgeContent={count} color="info">
                            <ShoppingCartOutlined style={{color: "white"}} onClick={() => setModalCart(true)}/>
                           
                        </Badge></ButtonCarrinhoModal>
                    </MenuItem>
                </Menu>
               
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
