import React from "react"
import styled from "styled-components";

import { Component , useState, Fragment} from "react";

import {Main} from './Pages/index'
import {GlobalStyled} from './globalStyled'


function App() {
  return (
    <>
    <GlobalStyled/>
      <Main />
    </>
  );
}

export default App;
