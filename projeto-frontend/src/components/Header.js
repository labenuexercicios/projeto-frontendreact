import React from "react";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: aquamarine;
  height: 10vh;
`;

export default function Header(props) {
  const { counteCartItems } = props;
  return (
    <ContainerHeader>
      <header className="row block center col-2">
        <div>
          <a href="#/">
            <h1>T-Space</h1>
          </a>
        </div>
        <div>
          <a href="#/cart">cart {counteCartItems ? <button className="badge">{counteCartItems}</button> : ""}</a> <a href="#/signin">SignIn</a>
        </div>
      </header>
    </ContainerHeader>
  );
}
