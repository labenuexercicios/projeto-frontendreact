import styled from "styled-components";

export const Navigation= styled.nav`
    height: 5vh;
    width: 100%
    background: black;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    align-items:stretch;
    margin-top:2vh;
    align-self:center;
`

export const ButtonNavigation = styled.button`& {
  color: #6667ab;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  z-index: 0;
  background: #6667ab;
  overflow: hidden;
  border: 2px solid #6667ab;
  color: #fff;
}
&:hover {
  color: #6667ab;
}
&:hover:after {
  width: 100%;
}
&:after {
  content: "";
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: #fff;
}
`