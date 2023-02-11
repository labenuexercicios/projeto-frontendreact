import React from "react";

import {Components} from 'react'
import styled from "styled-components";



// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper1 = styled.div`
width: 100%;
max-width: 70rem;
margin: 2rem auto;
padding: 0.1rem;
display: grid;
grid-template-rows:repeat(4, 1fr);
gap: 2rem;
align-items: flex-start;
`;
