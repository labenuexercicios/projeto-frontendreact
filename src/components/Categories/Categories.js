import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
    return (
        <div className="categories">
            <div className="columns">
                <div className="row">
                    <img className="imgCategories" src="/img/space8old.png" alt="" />
                    <button className="buttonCategories">
                        <Link className="linkCategories" to="/products/1">VIAO</Link>
                    </button>
                </div>
                <div className="row">
                    <img className="imgCategories" src="/img/space8old.png" alt="" />
                    <button className="buttonCategories">
                        <Link className="linkCategories" to="/products/1">VIAO</Link>
                    </button>
                </div>
            </div>
            <div className="columns">
                <div className="row">
                    <img className="imgCategories" src="/img/space8old.png" alt="" />
                    <button className="buttonCategories">
                        <Link className="linkCategories" to="/products/1">VIAO</Link>
                    </button>
                </div>
            </div>
            <div className="columns columnsLarge">
                <div className="rowDouble">
                    <div className="col">
                        <div className="row">
                            <img className="imgCategories" src="/img/asteroidsHero.png" alt="" />
                            <button className="buttonCategories">
                                <Link className="linkCategories" to="/products/1">VIAO</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img className="imgCategories" src="/img/asteroidsHero.png" alt="" />
                            <button className="buttonCategories">
                                <Link className="linkCategories" to="/products/1">VIAO</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img className="imgCategories" src="/img/space8old.png" alt="" />
                    <button className="buttonCategories">
                        <Link className="linkCategories" to="/products/1">VIAO</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories