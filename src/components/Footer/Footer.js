import React from 'react'
import Instagram from '../../images/insta.png'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'


import {AreaFooter} from './styled'

function Footer(){

    return(
        <>
            <AreaFooter>
                
                <p>LifestyleSpace © - "Venha pro lado divertido da força"</p> 
                

                <div className='redes-sociais'>
                    <p className = 'text-footer'>Acompanhe nossas redes sociais:</p>
                  
                    <a href='https://www.instagram.com/mariaeugeniialima/' target='_blank'> <img src={Instagram} alt='instagram'/></a> 
                    <a href='https://www.linkedin.com/in/mariaeugeniavanderley/' target='_blank'> <img src={Linkedin} alt='linkedin'/></a>
                    <a href='https://github.com/Eugeniialima'target='_blank'> <img src={Github} alt='github'/></a> 
                    
                </div>
            </AreaFooter>
        </>
    )
}

export default Footer