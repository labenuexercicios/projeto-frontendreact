import React from 'react';
import ContactBar from '../../components/ContactBar/ContactBar';
import '../../fonts/Shodo/Shodo_font190430-Regular.ttf';
import '../../fonts/Logirent/Logirent-Regular Demo.otf'
import './Footer.css';

const Footer = () => {
        return (
            <div className='footer'>
                <ContactBar />
                <div className='top'>
                    <div className='item'>
                        <h1>Categories</h1>
                        <span>Spaceships</span>
                        <span>Spacesuits</span>
                        <span>Creatures</span>
                    </div>
                    <div className='item'>
                        <h1>Links</h1>
                        <span>FAQ</span>
                        <span>PAGES</span>
                        <span>Stores</span>
                        <span>Cookies</span>
                    </div>
                    <div className='item'>
                        <h1>About</h1>
                        <span>Ullamco anim enim labore in quis fugiat do qui esse excepteur dolore do est sint. Eu ut magna consequat culpa deserunt cillum consectetur anim duis occaecat sint sunt proident mollit. Incididunt proident ad in eiusmod laborum est ullamco ex incididunt occaecat nisi nostrud consectetur amet. Culpa Lorem in esse cillum exercitation dolor mollit dolore velit anim est amet.</span>
                    </div>
                    <div className='item'>
                    <h1>Contact</h1>
                        <span>Ullamco anim enim labore in quis fugiat do qui esse excepteur dolore do est sint. Eu ut magna consequat culpa deserunt cillum consectetur anim duis occaecat sint sunt proident mollit. Incididunt proident ad in eiusmod laborum est ullamco ex incididunt occaecat nisi nostrud consectetur amet. Culpa Lorem in esse cillum exercitation dolor mollit dolore velit anim est amet.</span>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <span className='logo'>labestore</span>
                        <span className='copyright'>
                        © Copyright 2023. All Rights Reserved.
                        </span>
                    </div>
                    <div className='right'>
                        <img src="/img/mercado-pago-footer_480x480.avif" alt=""/>
                    </div>
                </div>
            </div>
        );
}

export default Footer;