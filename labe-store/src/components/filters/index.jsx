import { React, useState } from "react";
import { MenuInterativo } from "./styled";
import { FiMenu } from "react-icons/fi";


const Filters = () => {
    const [sideBar, setSideBar] = useState(false)
    return (
        <div>
            {sideBar === true ?
                <MenuInterativo>
                    <button onClick={() => { setSideBar(false) }}>X</button>
                    <form action="">
                        <input type="text" placeholder="preco minimo" />
                    </form>
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
