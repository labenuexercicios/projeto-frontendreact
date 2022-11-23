import React from "react";
import "./style.css";

export default function SearchSection(props){
    const handleChangeName = (event) => {
        props.setProductName(event.target.value);
    }

    const handleChangeMaximum = (event) => {
        props.setMaximumPrice(event.target.value);
    }

    const handleChangeMinimum = (event) => {
        props.setMinimumPrice(event.target.value);
    }

    const handleChangeCategory = (event) => {
        props.setCategory(event.target.value);
    }

    const handleChangeCheckbox = (index) => {
        const copyChecked = [...props.checkedState];
        copyChecked[index] = !copyChecked[index];
        props.setCheckedState([...copyChecked]);
    }

    const cleanSearch = () => {
        props.setProductName("");
        props.setMaximumPrice("");
        props.setMinimumPrice("");
        props.setCategory("");
        props.setOrder("");
        props.setCheckedState(new Array(props.radialSizes.length).fill(false));
    }
    
    return (
        <section id="search-section">
            <h2 id="search-section-title">Search</h2>
            <label className="search-label" htmlFor="name-search">Name:</label>
            <div className="input-div">
                <img className="icon" src="/search.svg" />
                <input className="input" type="text" placeholder="Flying Saucer" id="name-search" value={props.productName} onChange={handleChangeName}/>
            </div>
            <label className="search-label" htmlFor="max-price-search">Maximum Price (K$):</label>
            <div className="input-div">
                <img className="icon" src="/top.svg" />
                <input className="input" type="number" placeholder="1000" id="max-price-search" value={props.maximumPrice} onChange={handleChangeMaximum}/>
            </div>  
            <label className="search-label" htmlFor="min-price-search">Minimum Price (K$):</label>
            <div className="input-div">
                <img className="icon" src="/bottom.svg" />
                <input className="input" type="number" placeholder="0" id="min-price-search" value={props.minimumPrice} onChange={handleChangeMinimum}/>
            </div>
            <label className="search-label" htmlFor="category-search">Category</label>
            <select id="category-search" className="input-div" onChange={handleChangeCategory} value={props.category}>
                <option value="">---</option>
                <option value="Pod">Pod</option>
                <option value="Fuel tank">Fuel tank</option>
                <option value="Engine">Engine</option>
            </select>    
            {props.radialSizes.map((size, index) => {
                return (
                    <div key={index}>
                        <input id={`${size}-checkbox`} className="checkbox-input" type="checkbox" onChange={() => handleChangeCheckbox(index)} checked={props.checkedState[index]}/>
                        <label htmlFor={`${size}-checkbox`} className="checkbox-label">{size}</label>
                    </div>
                )
            })}     
            <button onClick={cleanSearch} className="small-button">Clear filters</button>           
        </section>
    )
}