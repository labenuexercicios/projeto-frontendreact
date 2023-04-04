import { ImportExport } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import "./Home.css"
import Slider from '../../components/Slider/Slider';
import Slider2 from '../../components/Slider2/Slider2';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Categories2 from '../../components/Categories/Categories2';
import Categories3 from '../../components/Categories/Categories3';
import ContactBar from '../../components/ContactBar/ContactBar';
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });

const Home = () => {

    return (
        <div className='home'>
            <Slider2 />
            <Categories3 />
        </div>
    );
}

export default Home;