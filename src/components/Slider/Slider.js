import React, { useState } from "react";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import "./Slider.css"

const Slider = () => {

    const [currentSlider, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlider === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlider === 2 ? 0 : (prev) => prev + 1)
    }
    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {data.map((image, index) => (
                    <img
                        key={index}
                        id="imgSlider"
                        src={image}
                        alt=""
                        style={{ left: `${index * 100}%` }}
                    />
                ))}
            </div>
            <div id="iconsSlider" className="icons">
                <div id="iconSlider" className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>

                <div id="iconSlider" className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider