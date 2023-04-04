import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../fonts/High/High Jersey.ttf';
import '../../fonts/Shodo/Shodo_font190430-Regular.ttf';
import '../../fonts/Tabela/TABELA Regular.ttf';
import '../../fonts/Sigilos/Sigilos de Conhecimento.ttf';
import "./Categories3.css";

const Categories3 = () => {
    const [titleType, setTitleType] = useState("CREATURES");
    const [nextTitleType, setNextTitleType] = useState("");

    const handleTitleClick = (title) => {
        if (title !== titleType) {
            setNextTitleType(title);
            setTimeout(() => {
                setTitleType(title);
                setNextTitleType("");
            }, 500); // Adjust the duration of the animation as needed
        }
    };

    console.log()
    return (
        <div className="creaturesBody">
            <div className="creaturesHome">
                <div className="backgroundCreaturesHome">
                    <div className="shadow">
                        <div className="triangle-wrapper">
                            <div className="triangle">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="creaturesDesc">
                    <div className="iconsHome">
                        <div className="first" onClick={() => handleTitleClick("SPACESHIPS")}>SPACESHIPS</div>
                        <span>-</span>
                        <div className="first" onClick={() => handleTitleClick("SPACESUIT")}>SPACESUITS</div>
                        <span>-</span>
                        <div className="first" onClick={() => handleTitleClick("CREATURES")}>CREATURES</div>
                    </div>
                    <div className="creaturesTopDesc" key={titleType}>
                        <div className={`title-fade ${nextTitleType !== "" ? "show" : ""}`}>{nextTitleType}</div>
                        <div className={`title-fade ${nextTitleType !== "" ? "" : "show"}`}>{titleType}</div>
                    </div>
                    <div className="creaturesBottomDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="imgCreaturesHome">
                    {titleType === "CREATURES" ? <div className="card-front"></div>
                        : (titleType === "SPACESUIT" ? <div className="card-front1"></div>
                            : (titleType === "SPACESHIPS" ? <div className="card-front2"></div>
                                : null))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories3