import React from "react"
import { ContainerFooter, LinksDireita, LinksEsquerda, LogoFooter, LinkScrool } from "./Style"
import logosemfundo from "../Assets/image-removebg-preview.png"


const Footer = () => {
    return (
<>

<ContainerFooter>

 <LinksDireita>

<a href="https://www.linkedin.com/in/leticia-correia-085189204/"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="Social Mídia"></img></a>
<a href="https://github.com/lecjxx"><img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="Social Mídia"></img></a>

</LinksDireita>


<LinksEsquerda>

<LinkScrool href="#home">    
<LogoFooter src={logosemfundo} alt="Logo Footer"/> 
</LinkScrool>

<p>&copy; 2022</p>
</LinksEsquerda> 

</ContainerFooter>
</>
    )
}

export default Footer