import React from 'react'
import { Button, Contact, ContactDesc, ContactTitle, Container, Input, SearchContainer } from './style'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Banner = () => {
    return (
        <Container>
            <Contact>
                <ContactTitle>Fique por dentro das novidades!</ContactTitle>
                <ContactDesc>Novas coleções, promoções entre outros.</ContactDesc>
            </Contact>
            <SearchContainer>
                <EmailOutlinedIcon style={{ color: "gray", fontSize: 25, marginLeft:10 }} />
                <Input type='email' placeholder='Cadastre seu e-mail' />
            </SearchContainer>    
                <Button>
                    <SendOutlinedIcon style={{color: 'white', }}/>
                </Button>

            


        </Container>
    )
}

export default Banner
