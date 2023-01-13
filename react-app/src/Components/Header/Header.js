import React from "react"
import {CabecalhoHeader} from "./Style"
import logo from "../Assets/SINGULARITY 2.png"

const Header = () => {
    return (
        <>
<CabecalhoHeader>
    <img src={logo} alt="Logo" id="home"/>
</CabecalhoHeader>


</>
    )

}
export default Header