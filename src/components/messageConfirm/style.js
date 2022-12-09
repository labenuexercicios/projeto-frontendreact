import styled from "styled-components";
import 'animate.css'

export const True = styled.article `
    background-color: green;
    color: white;
    width: 60%;
    text-align: center;
    margin-left: auto;
    margin-top: 20px;
    border-radius: 5px;
    margin-right: 8px;
    margin-bottom: 20px;
    animation: backInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
`
export const False = styled.article `
    background-color: red;
    color: white;
    width: 60%;
    text-align: center;
    margin-left: auto;
    margin-top: 20px;
    border-radius: 5px;
    margin-right: 8px;
    margin-bottom: 20px;
    animation: backInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
`