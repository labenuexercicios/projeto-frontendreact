import React from "react";
import Twiter from "../img/twiter.png"
import Likedin from "../img/likedin.png"
import Insta from "../img/insta.png"
import Face from "../img/face.png"

function RedesSociais () {
    return (
        <div >
            <ul class="rede">
                <li>
                <a href="https://twitter.com/i/flow/login" target="_blank"><img src={Twiter}/></a> 
                </li>
                <li>
                <a href="https://br.linkedin.com/" target="_blank"><img src={Likedin}/></a>
                </li>
                <li>
                <a href="https://pt-br.facebook.com/" target="_blank"><img src={Face}/></a> 
                </li>
                <li>
                <a href="https://www.instagram.com/" target="_blank"><img src={Insta}/></a>
                </li>
            </ul>        
        </div>   
    )   
}
export default RedesSociais