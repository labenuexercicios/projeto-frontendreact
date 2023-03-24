import React from "react";
import {AllRightsReserved} from './styled'
import RedesSociais from "./RedesSociais";
import CopyWrite from "./CopyWrite";

function Footer () {
    return(
        <AllRightsReserved>
        <div class="footer">
            <RedesSociais/>
            <CopyWrite/>
        </div>
        </AllRightsReserved>
    )
}

export default Footer