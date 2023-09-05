// import React, { useContext } from "react"
import React from "react"
import Header from '../layout/Header/Header'
import Aside from '../layout/Aside/Aside'
import { Container } from "../layout/Header/styled"
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
    <>
        <Header />
        <Aside />
        <Container>
            <Main />
        </Container>
        <Footer />
    </>
    )
}
