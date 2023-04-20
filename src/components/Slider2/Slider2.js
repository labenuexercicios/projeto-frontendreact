import React, { useState } from "react";
import "./Slider2.css"


const Slider2 = () => {

    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const handleOnDown = (e) => setMouseDownAt(e.clientX);

    const handleOnUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleOnMove = (e) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const nextPercentageUnconstrained =
            parseFloat(prevPercentage) + (mouseDelta / maxDelta) * -100;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        setPercentage(nextPercentage);

        const track = document.getElementById("image-track");

        track.animate(
            {
                transform: `translate(${nextPercentage}%, -50%)`,
            },
            { duration: 1200, fill: "forwards" }
        );

        for (const image of track.getElementsByClassName("imageSlider2")) {
            image.animate(
                {
                    objectPosition: `${100 + nextPercentage}% center`,
                },
                { duration: 1200, fill: "forwards" }
            );
        }
    };

    return (

        <div className="slider2" >
            <span class="parallax-text" text="SCROLL DOWN">
                SCROLL DOWN
            </span>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0"
                onMouseDown={handleOnDown}
                onTouchStart={(e) => handleOnDown(e.touches[0])}
                onMouseUp={handleOnUp}
                onTouchEnd={(e) => handleOnUp(e.touches[0])}
                onMouseMove={handleOnMove}
                onTouchMove={(e) => handleOnMove(e.touches[0])}>
                <img className="imageSlider2" src="/img/suit2.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/space11.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/creat11.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/suit1.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/suit10.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/spaceAnime1.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/suit4.png" alt="" draggable="false" />
                <img className="imageSlider2" src="/img/creature1.png" alt="" draggable="false" />
            </div>
        </div>
    )
}
export default Slider2