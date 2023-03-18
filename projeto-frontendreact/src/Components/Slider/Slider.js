import React, { useState, useEffect } from 'react';

export default function Slider () {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        let count = 1

        document.getElementById("radio1").checked = true
        
        setInterval( function(){
            nextImage()
        }, 4000)
        
        function nextImage(){
            count++
            if(count>4){
                count = 1
            }
        
            document.getElementById("radio"+count).checked = true
        }
  
    }, [])
  
  
    return (
      <div className="slider">
  
        <div className="slides">
  
          {/* Radio Button */}
          <input type={"radio"} name={"radio-btn"} id={"radio1"}  />
          <input type={"radio"} name={"radio-btn"} id={"radio2"} />
          <input type={"radio"} name={"radio-btn"} id={"radio3"} />
          <input type={"radio"} name={"radio-btn"} id={"radio4"}  />
          {/* Fim Radio Button */}
  
          {/* Slide Images */}
          <div className={`slide first ${currentSlide === 1 ? "active" : ""}`}>
            <img src="https://uploaddeimagens.com.br/images/004/394/653/original/universe_bg1.png?1679009661" alt="imagem-1" />
          </div>
  
          <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
            <img src="https://uploaddeimagens.com.br/images/004/394/655/original/universe_bg2.png?1679009765" alt="imagem-2" />
          </div>
  
          <div className={`slide ${currentSlide === 3 ? "active" : ""}`}>
            <img src="https://uploaddeimagens.com.br/images/004/394/657/original/universe_bg3.png?1679009808" alt="imagem-3" />
          </div>
  
          <div className={`slide ${currentSlide === 4 ? "active" : ""}`}>
            <img src="https://uploaddeimagens.com.br/images/004/394/659/original/miguelbitz_background_de_um_site_com_tema_cosmico_4K_desfocado_dc8d5583-c979-42d2-9dc7-ecb1bd53d9ed.png?1679009854" alt="imagem-4" />
          </div>
          {/* Fim Slide Images */}
  
          {/* Navigation auto*/}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
  
        </div>
  
        <div className="manual-navigation">
          <label htmlFor={"radio1"} className={"manual-btn"}></label>
          <label htmlFor={"radio2"} className={"manual-btn"}></label>
          <label htmlFor={"radio3"} className={"manual-btn"}></label>
          <label htmlFor={"radio4"} className={"manual-btn"}></label>
        </div>
  
      </div>
    );
  }
