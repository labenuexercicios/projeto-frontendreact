import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { useNavigate } from "react-router-dom"
import { LinkWithDelay } from "../../LinkWithDelay"

import "./Login.css"
function LoginPage() {
    const pathRef = useRef(null);
    var current = null; 
    const navigate = useNavigate();


    useEffect(() => {
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        const submitButton = document.querySelector('#submit');

        const handleEmailFocus = () => {
            if (current) current.pause();
            current = anime({
                targets: 'path',
                strokeDashoffset: {
                    value: 0,
                    duration: 700,
                    easing: 'easeOutQuart'
                },
                strokeDasharray: {
                    value: '240 1386',
                    duration: 700,
                    easing: 'easeOutQuart'
                }
            });
        };
        const handlePasswordFocus = () => {
            if (current) current.pause();
            current = anime({
                targets: 'path',
                strokeDashoffset: {
                    value: -336,
                    duration: 700,
                    easing: 'easeOutQuart'
                },
                strokeDasharray: {
                    value: '240 1386',
                    duration: 700,
                    easing: 'easeOutQuart'
                }
            });
        };
        const handleSubmitFocus = () => {
            if (current) current.pause();
            current = anime({
                targets: 'path',
                strokeDashoffset: {
                    value: -730,
                    duration: 700,
                    easing: 'easeOutQuart'
                },
                strokeDasharray: {
                    value: '530 1386',
                    duration: 700,
                    easing: 'easeOutQuart'
                }
            });
        };

        emailInput.addEventListener('focus', handleEmailFocus);
        passwordInput.addEventListener('focus', handlePasswordFocus);
        submitButton.addEventListener('focus', handleSubmitFocus);


        return () => {
            emailInput.removeEventListener('focus', handleEmailFocus);
            passwordInput.removeEventListener('focus', handlePasswordFocus);
            submitButton.removeEventListener('focus', handleSubmitFocus);
        };
    }, []);

    return (
        <div className="bodyLogin">
            <div className="pageLogin">
                <div className="containerLogin">
                    <div className="rightLogin">
                        <svg className="svgLogin" viewBox="0 0 320 300">
                            <defs>
                                <linearGradient
                                    id="linearGradient"
                                    x1="13"
                                    y1="193.49992"
                                    x2="307"
                                    y2="193.49992"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        style={{ stopColor: '#00FBFF' }}
                                        offset="0"
                                        id="stop876"
                                    />
                                    <stop
                                        style={{ stopColor: '#8618C1' }}
                                        offset="1"
                                        id="stop878"
                                    />
                                </linearGradient>
                            </defs>
                            <path className="pathLogin" d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                        </svg>
                        <div className="formLogin">
                            <label className="labelLogin" htmlFor="email">Email</label>
                            <input className="inputLogin" type="email" id="email" autoComplete="off"/>
                            <label className="labelLogin" htmlFor="password">Password</label>
                            <input className="inputLogin" type="password" id="password" />
                                <input className="inputLogin" type="submit" id="submit" value="Submit" onClick={() => navigate("/home")}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;