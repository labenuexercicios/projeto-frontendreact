import { React, useState } from "react";
import { ContainerForm, MenuInterativo } from "./styled";
import { FiMenu } from "react-icons/fi";


const Filters = ({ numberMin, setNumberMin }) => {

    const [sideBar, setSideBar] = useState(false)
    return (
        <div>
            {sideBar === true ?
                <MenuInterativo>
                    <button onClick={() => {
                        setSideBar(false)
                    }}>X</button>
                    <ContainerForm action="">
                        <input type="number" placeholder="preco minimo"
                            onChange={(e) => { setNumberMin(e.target.value) }}
                        />
                        <input type="number" placeholder="preco maximo" />
                    </ContainerForm>
                </MenuInterativo>
                :
                <section>
                    <button onClick={() => { setSideBar(true) }} ><FiMenu /></button>
                </section>
            }

        </div>
    )
}

export default Filters;
