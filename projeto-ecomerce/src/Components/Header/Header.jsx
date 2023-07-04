import React from 'react'
import {H1, Container, Input} from "./HeaderStyle"

export const Header = () => {
    return (
        <Container>
            <H1>TERRAZUL</H1>
            <Input  placeholder="pesquisar"/>
        </Container>
    )   
}