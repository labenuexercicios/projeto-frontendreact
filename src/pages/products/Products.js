import React, { useState } from 'react';
import List from '../../components/List/List';
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import "./Products.css";



const Products = ({ typeProducts }) => {

    const { typeP } = useContext(AppContext);

    const [sort, setSort] = useState(null)
    const [priceMax, setPriceMax] = useState(1000000)

    const idCategory = parseInt(useParams().id)

    const [isNewOnly, setIsNewOnly] = useState(false);
    const [promotion, setPromotion] = useState(false);

    function buttonNewOnly() {
        setIsNewOnly(true)
        setPromotion(false)
    }

    function buttonPromotionOnly() {
        setPromotion(true)
        setIsNewOnly(false)
    }

    function buttonAll() {
        setIsNewOnly(false)
        setPromotion(false)
    }

    return (
        <div className="productsPage">
            <div className="leftProducts">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <button className="buttonInputItem" onClick={buttonAll}>
                            ALL PRODUCTS
                        </button>
                    </div>
                    <div className="inputItem">
                        <button className="buttonInputItem" onClick={buttonNewOnly}>
                            NEW SEASON
                        </button>
                    </div>
                    <div className="inputItem">
                        <button className="buttonInputItem" onClick={buttonPromotionOnly}>
                            PROMOTION
                        </button>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by Price</h2>
                    <div className="inputItem">
                        <span className="spanPriceRange">199 -</span>
                        <input type="range" min={199} max={1000000} value={priceMax} onChange={(e) => setPriceMax(e.target.value)}
                        />
                        <span className="spanPriceRange1">- {priceMax}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItemSort">
                        <div className="sortAsc">
                            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
                            <label className="labelSort" htmlFor="asc">Price (Lowest First)</label>
                        </div>
                        <div className="sortDesc">
                            <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
                            <label className="labelSort" htmlFor="desc">Price (Highest First)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightProducts">
                {typeP === "spaceship" ? <img
                    className="catImage"
                    src="/img/loginbackground1.png"
                    alt="" />
                    :
                    (typeP === "suits" ? <img
                        className="catImage"
                        src="/img/loginbackground2.png"
                        alt="" />
                        :
                        (typeP === "creatures" ? <img
                            className="catImage"
                            src="/img/loginbackground3.png"
                            alt="" />
                            :
                            <img
                                className="catImage"
                                src="/img/loginbackground1.png"
                                alt="" />)
                    )
                }
                <List promotion={promotion} isNewOnly={isNewOnly} typeProducts={typeProducts} idCategory={idCategory} priceMax={priceMax} sort={sort} />
            </div>
        </div>
    );
}

export default Products;