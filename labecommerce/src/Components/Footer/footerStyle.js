import React from "react";
import styled from "styled-components";

export const FooterStyle = styled.div`
    display:grid;
    grid-template-columns: 90% 10%;
    background:#2C5F2D;
    color:white;
    /* justify-content:center;
    align-items:center; */
    width:100vw;
    padding-left:10px;
    padding-top:10px;
    height:20vh;

p{
    font-size:15px;
    line-height:2rem;
};
`;
export const Help = styled.a`
    display:grid;
    text-decoration:none;
    color: white;
    padding:8px;

`;

export const SocialMedia = styled.a`
    display:inline-flex;
    font-size: 12px;
    padding-top:10px;
    text-decoration:none;
    color:white;
    padding:6px;

 `;
export const Base = styled.div`
    display:grid;
    font-size: 12px;
    justify-content:center;
    align-items:center;
    background:#2C5F2D;
    color:white;
    width:100vw;
    
 `;

