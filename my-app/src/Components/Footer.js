import React from "react"
import github from "./Pages/github.png"

export function Footer () {
    return(
      <div className="Footer">
        <h3 className="texto">Criado por Julia Guida pela Labenu</h3>
        <a href="https://github.com/JuliaGM1993"><input type="button" className="github" src={github}/></a> 
      </div>
    )
}
