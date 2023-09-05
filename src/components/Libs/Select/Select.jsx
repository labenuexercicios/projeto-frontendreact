import { useState,useContext } from "react"
import { BoxSelect } from "./styledSelect"
import { orderArray } from "../Lib";
import { ProductsContext } from '../../Context/ProductsContext'

export function Select() {

    const { setTypeSort} = useContext(ProductsContext)
    const [isVisible, setIsVisible] = useState(false)
    const widthBox = '130px';

    function show(option, type) {
        const element = document.getElementById("order")
        element.innerText = option
        orderArray(type,setTypeSort)
        setIsVisible(false)
    }

    function selectt() {
        setIsVisible(!isVisible)
    }

    return (
        <BoxSelect isVisible={isVisible} widthBox={widthBox}>
            <div>
                <button id="order" value="N" onClick={selectt}>ordernar por</button>
                <ul>
                    <li onClick={() => show("relevância",  "N")}>relevância</li>
                    <li onClick={() => show("menor preço", 'A')}>menor preço</li>
                    <li onClick={() => show("maior preço", "D")}>maior preço</li>
                    <li onClick={() => show("a-Z", "AZ")}       >de A a Z</li>
                    <li onClick={() => show("Z-a", "ZA")}       >de Z a A</li>
                </ul>
            </div>
        </BoxSelect>
    )
}



